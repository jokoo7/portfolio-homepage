import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { unlink } from "fs/promises";
import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { createContactToDb, updateContactToDb } from "@/services/firebase-service";

export const runtime = "nodejs"; // Pastikan ini ada jika Anda ingin menggunakan fs

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Tentukan lokasi penyimpanan file
    const uploadDir = path.join(process.cwd(), "public", "uploads", "contact");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, file.name);
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, fileBuffer);

    // Ambil data lainnya dari FormData
    const label = data.get("label") as string;
    const url = data.get("url") as string;

    // Simpan data ke database
    const contactData = {
      label,
      url,
      icon: `/uploads/contact/${file.name}`,
    };

    // Save data to Firestore
    const isSaved = await createContactToDb(contactData);

    if (!isSaved) {
      throw new Error("Failed to save contact data to Firestore");
    }
    return NextResponse.json({ success: true, message: "Yess!! Succes create contact" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error to save contact data to Firestore or save file" + error },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const data = await req.formData();

    const id = data.get("id") as string;
    if (!id) {
      return NextResponse.json({ message: "contact ID is required" }, { status: 400 });
    }

    const file = data.get("file") as File;
    let iconPath: string | null = null;
    if (file) {
      const uploadDir = path.join(process.cwd(), "public", "uploads", "contact");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filePath = path.join(uploadDir, file.name);
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(filePath, fileBuffer);

      iconPath = `/uploads/contact/${file.name}`;
    }

    // Ambil data lainnya dari FormData
    const label = data.get("label") as string;
    const url = data.get("url") as string | null;

    // Simpan data ke database
    const contactData = {
      label,
      url,
      ...(iconPath && { image: iconPath }),
    };

    const isSaved = await updateContactToDb(contactData, id);

    if (isSaved) {
      return NextResponse.json({ message: "contact updated successfully" });
    } else {
      return NextResponse.json({ message: "Failed to update contact" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error to edit contact data to Firestore or save file" + error },
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
    const docRef = doc(firestore, "contacts", id);
    await deleteDoc(docRef);

    return NextResponse.json({ message: "File and data deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Failed to delete file and data:", error);
    return NextResponse.json({ error: "Failed to delete file and data" }, { status: 500 });
  }
}
