import { NextResponse } from "next/server";
import { unlink } from "fs/promises";
import path from "path";
import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase"; // Sesuaikan dengan konfigurasi Firebase Anda

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

    console.log("path: ", absolutePath);

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
