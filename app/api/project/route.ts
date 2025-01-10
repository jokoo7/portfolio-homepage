import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { createProjectToDb, updateProjectToDb } from "@/services/firebase-service";
import { unlink } from "fs/promises";
import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export const runtime = "nodejs"; // Pastikan ini ada jika Anda ingin menggunakan fs

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Tentukan lokasi penyimpanan file
    const uploadDir = path.join(process.cwd(), "public", "uploads", "project");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, file.name);
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, fileBuffer);

    // Ambil data lainnya dari FormData
    const title = data.get("title") as string;
    const slug = data.get("slug") as string;
    const url = data.get("url") as string | null;
    const github_url = data.get("github_url") as string | null;
    const description = data.get("description") as string;
    const techStack = JSON.parse(data.get("techStack") as string) as string[];

    // Simpan data ke database
    const projectData = {
      title,
      slug,
      url,
      github_url,
      description,
      techStack,
      image: `/uploads/project/${file.name}`,
      is_best: false,
    };

    // Save data to Firestore
    const isSaved = await createProjectToDb(projectData);

    if (!isSaved) {
      throw new Error("Failed to save project data to Firestore");
    }
    return NextResponse.json({ success: true, message: "Yess!! Succes create project" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error to save project data to Firestore or save file" + error },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const data = await req.formData();

    const id = data.get("id") as string;
    if (!id) {
      return NextResponse.json({ message: "Project ID is required" }, { status: 400 });
    }

    const file = data.get("file") as File;
    let imagePath: string | null = null;
    if (file) {
      const uploadDir = path.join(process.cwd(), "public", "uploads", "project");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filePath = path.join(uploadDir, file.name);
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(filePath, fileBuffer);

      imagePath = `/uploads/project/${file.name}`;
    }

    // Ambil data lainnya dari FormData
    const title = data.get("title") as string;
    const slug = data.get("slug") as string;
    const url = data.get("url") as string | null;
    const github_url = data.get("github_url") as string | null;
    const description = data.get("description") as string;
    const techStack = JSON.parse(data.get("techStack") as string) as string[];

    // Simpan data ke database
    const projectData = {
      title,
      slug,
      url,
      github_url,
      description,
      techStack,
      is_best: false,
      ...(imagePath && { image: imagePath }),
    };

    const isSaved = await updateProjectToDb(projectData, id);

    if (isSaved) {
      return NextResponse.json({ message: "Project updated successfully" });
    } else {
      return NextResponse.json({ message: "Failed to update project" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error to edit project data to Firestore or save file" + error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { filePath, id } = body;

    // Validasi input
    if (!filePath || !id) {
      return NextResponse.json({ error: "File path and document ID are required" }, { status: 400 });
    }

    // Path absolut file di folder public
    const absolutePath = path.join(process.cwd(), "public", filePath);

    // Hapus file di folder public
    await unlink(absolutePath);

    // Hapus dokumen di Firestore
    const docRef = doc(firestore, "projects", id);
    await deleteDoc(docRef);

    return NextResponse.json({ message: "File and data deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Failed to delete file and data:", error);
    return NextResponse.json({ error: "Failed to delete file and data" }, { status: 500 });
  }
}
