"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { fal } from "@fal-ai/client";
import { useToast } from "@/hooks/use-toast";
import { Download, Share2, Heart } from 'lucide-react';

fal.config({
  credentials: process.env.NEXT_PUBLIC_FAL_KEY,
});

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateImage = async () => {
    setLoading(true);
    try {
      const result = await fal.subscribe("fal-ai/flux/dev", {
        input: {
          prompt: prompt,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            update.logs.map((log) => log.message).forEach((message) => 
              toast({
                title: "Progress Update",
                description: message,
              })
            );
          }
        },
      });
      
      if (result.data && result.data.images && result.data.images[0]) {
        setImageUrl(result.data.images[0].url);
      } else {
        throw new Error("No image generated");
      }
      
      toast({
        title: "Image Generated",
        description: `Request ID: ${result.requestId}`,
      });
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const handleDownload = () => {
    // Implement download functionality
    toast({
      title: "Download",
      description: "Image download started.",
    });
  };

  const handleShare = () => {
    // Implement share functionality
    toast({
      title: "Share",
      description: "Sharing options opened.",
    });
  };

  const handleAddToFavorites = () => {
    // Implement add to favorites functionality
    toast({
      title: "Favorites",
      description: "Image added to favorites.",
    });
  };

  return (
    <Card className="p-4 md:p-6 max-w-xl mx-auto border border-gradient-1-start bg-gradient-to-br from-background to-secondary">
      <h2 className="text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1-start to-gradient-1-end">Luunos AI Image Generator</h2>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border-gradient-2-start focus:border-gradient-2-end bg-background"
        />
        <Button 
          onClick={generateImage} 
          disabled={loading} 
          className="w-full bg-gradient-to-r from-gradient-2-start to-gradient-2-end text-white"
        >
          {loading ? 'Creating...' : 'Create Image'}
        </Button>
        {imageUrl && (
          <div className="mt-4">
            <img src={imageUrl} alt="Generated image" className="w-full rounded-lg border-2 border-gradient-3-start" />
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Button onClick={handleDownload} variant="outline" className="flex-1 border-gradient-1-start hover:bg-gradient-to-r hover:from-gradient-1-start hover:to-gradient-1-end hover:text-white transition-all duration-300">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
              <Button onClick={handleShare} variant="outline" className="flex-1 border-gradient-2-start hover:bg-gradient-to-r hover:from-gradient-2-start hover:to-gradient-2-end hover:text-white transition-all duration-300">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
              <Button onClick={handleAddToFavorites} variant="outline" className="flex-1 border-gradient-3-start hover:bg-gradient-to-r hover:from-gradient-3-start hover:to-gradient-3-end hover:text-white transition-all duration-300">
                <Heart className="mr-2 h-4 w-4" /> Add to Favorites
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}