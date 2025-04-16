import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const [rows] = await db.query('SELECT * FROM groups');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Veri alınamadı', detail: error });
    }
  }

  else if (req.method === 'POST') {
    const { kod, sorumlu, uyeler, altlar } = req.body;
    if (!kod || !sorumlu) {
      return res.status(400).json({ error: 'Eksik veri' });
    }
    try {
      await db.query(
        'INSERT INTO groups (kod, sorumlu, uyeler, altlar) VALUES (?, ?, ?, ?)',
        [kod, sorumlu, uyeler || '', altlar || '']
      );
      res.status(201).json({ message: 'Grup eklendi' });
    } catch (error) {
      res.status(500).json({ error: 'Grup eklenemedi', detail: error });
    }
  }

  else if (req.method === 'PUT') {
    const { id, kod, sorumlu, uyeler, altlar } = req.body;
    if (!id || !kod || !sorumlu) {
      return res.status(400).json({ error: 'Eksik veri' });
    }
    try {
      await db.query(
        'UPDATE groups SET kod = ?, sorumlu = ?, uyeler = ?, altlar = ? WHERE id = ?',
        [kod, sorumlu, uyeler, altlar, id]
      );
      res.status(200).json({ message: 'Grup güncellendi' });
    } catch (error) {
      res.status(500).json({ error: 'Grup güncellenemedi', detail: error });
    }
  }

  else if (req.method === 'DELETE') {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'ID gereklidir' });
    }
    try {
      await db.query('DELETE FROM groups WHERE id = ?', [id]);
      res.status(200).json({ message: 'Grup silindi' });
    } catch (error) {
      res.status(500).json({ error: 'Grup silinemedi', detail: error });
    }
  }

  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
