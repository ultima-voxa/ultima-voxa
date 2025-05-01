
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { ThumbsUp } from "lucide-react";

const sampleMessages = [
  {
    text: "Aime plus que tu n’as peur.",
    author: "— Léo, France",
    language: "fr",
    image: "/images/message1.jpg",
    likes: 0,
    emoji: "❤️"
  },
  {
    text: "Je reviendrai dans le chant des oiseaux.",
    author: "— Aya, Japon",
    language: "fr",
    image: "/images/message2.jpg",
    likes: 0,
    emoji: "🌸"
  },
  {
    text: "Après moi, le déluge.",
    author: "— Max, Allemagne",
    language: "fr",
    image: "/images/message3.jpg",
    likes: 0,
    emoji: "🌧️"
  },
];

export default function UltimaVoxaLanding() {
  const [selectedLang, setSelectedLang] = useState("all");
  const [messages, setMessages] = useState(sampleMessages);

  const filteredMessages = selectedLang === "all"
    ? messages
    : messages.filter(msg => msg.language === selectedLang);

  const handleLike = (index) => {
    const newMessages = [...messages];
    newMessages[index].likes++;
    setMessages(newMessages);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-violet-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Ultima Voxa
      </motion.h1>
      <motion.p
        className="text-center mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Cyber-Memorial of Humanity. Laisse un message symbolique, illustré par l'art de l'IA et la voix d'une autre époque.
      </motion.p>

      <motion.div
        className="mt-10 w-full max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Card className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <Input placeholder="Écris ton Dernier Mot..." className="bg-black text-white border-violet-500" />
            <Button className="w-full">Envoyer mon message (1€)</Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="mt-12 text-sm text-gray-500 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Chaque message devient une œuvre. Une image cyberpunk, une voix d’espoir, une trace pour l’éternité.
      </motion.div>

      <motion.div
        className="mt-16 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-violet-400">Galerie des Derniers Mots</h2>
        <div className="mb-6 text-center">
          <label className="mr-2">Filtrer par langue :</label>
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="bg-black border border-violet-500 text-white rounded px-3 py-1"
          >
            <option value="all">Toutes</option>
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
            <option value="jp">Japonais</option>
          </select>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredMessages.map((msg, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-violet-500 shadow-md hover:scale-[1.02] transition"
            >
              <img
                src={msg.image}
                alt="Illustration IA"
                className="w-full h-40 object-cover rounded mb-3"
              />
              <p className="italic text-white mb-2">“{msg.text}”</p>
              <p className="text-sm text-gray-400 text-right mb-2">{msg.author}</p>
              <div className="flex items-center justify-between text-sm">
                <button
                  onClick={() => handleLike(index)}
                  className="flex items-center space-x-1 text-violet-400 hover:text-violet-300"
                >
                  <ThumbsUp size={16} />
                  <span>{msg.likes}</span>
                </button>
                <span>{msg.emoji}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
