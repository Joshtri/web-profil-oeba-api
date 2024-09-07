import Kegiatan from '../models/kegiatan.model.js';



// Fungsi untuk mendapatkan semua data kegiatan
export const getKegiatan = async (req, res) => {
    try {
        // Ambil semua data kegiatan dari database
        const kegiatan = await Kegiatan.find();
        
        // Jika tidak ada data
        if (kegiatan.length === 0) {
            return res.status(404).json({ message: 'Tidak ada data kegiatan yang ditemukan' });
        }

        // Kirimkan data kegiatan
        res.status(200).json(kegiatan);
    } catch (error) {
        console.error("Error fetching kegiatan data:", error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data kegiatan' });
    }
};