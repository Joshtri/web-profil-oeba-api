import Pengumuman from "../models/pengumuman.model.js";

// Mendapatkan semua pengumuman
export const getPengumuman = async (req, res) => {
    try {
        const pengumuman = await Pengumuman.find();
        if (pengumuman.length === 0) {
            return res.status(404).json({ message: 'Tidak ada data pengumuman yang ditemukan' });
        }
        res.status(200).json(pengumuman);
    } catch (error) {
        console.error("Error fetching pengumuman data:", error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data pengumuman' });
    }
};