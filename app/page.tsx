import { ImageGenerator } from '@/components/ImageGenerator';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Cpu, Zap, Layers, ArrowRight, Paintbrush, Wand2, Image as ImageIcon, Sparkles, VideoIcon } from 'lucide-react';

const aiGeneratedImages = [
  { url: "https://i.imgur.com/JMf6TSZ.jpg", prompt: "Futuristic cyberpunk city with neon-lit sports cars racing through the streets" },
  { url: "https://i.imgur.com/PbYkRwI.jpg", prompt: "Serene Japanese garden with cherry blossoms, a koi pond, and vibrant autumn colors" },
  { url: "https://i.imgur.com/L5taRay.jpg", prompt: "Enchanted forest with glowing mushrooms and fairy lights in a misty atmosphere" },
  { url: "https://i.imgur.com/Zc5zxPf.jpg", prompt: "Steampunk-inspired flying machine with brass gears, propellers, and ornate wings" },
  { url: "https://i.imgur.com/ZVQMSdz.jpg", prompt: "Majestic villa perched on a floating island, surrounded by lush gardens and a sleek tennis court, with cascading waterfalls spilling into glowing rivers below under a vibrant sunset sky" },
  { url: "https://i.imgur.com/FnrG6sA.jpg", prompt: "Surreal landscape with floating islands, waterfalls, and a tree on a cliff" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.imgur.com/NUiZMpR.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1-start to-gradient-1-end">
                Transform Your Words into Images
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Try Luunos AI for Free and Bring Your Imagination to Life!
              </p>
              <Button size="lg" asChild className="bg-gradient-to-r from-gradient-2-start to-gradient-2-end text-white hover:from-gradient-2-end hover:to-gradient-2-start transition-all duration-300">
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
            <div className="max-w-2xl mx-auto">
              <ImageGenerator />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1-start to-gradient-1-end">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md">
                <Cpu className="h-12 w-12 text-gradient-1-start mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced AI</h3>
                <p className="text-muted-foreground">State-of-the-art machine learning models for stunning image generation.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md">
                <Zap className="h-12 w-12 text-gradient-2-start mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">Generate high-quality images in seconds, not minutes.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md">
                <Layers className="h-12 w-12 text-gradient-3-start mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                <p className="text-muted-foreground">Fine-tune your results with advanced settings and controls.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1-start to-gradient-1-end">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-gradient-1-start to-gradient-1-end text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Paintbrush className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Describe</h3>
                <p className="text-muted-foreground">Enter a detailed description of the image you want to create.</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-gradient-2-start to-gradient-2-end text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wand2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Generate</h3>
                <p className="text-muted-foreground">Our AI processes your description and creates multiple image options.</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-gradient-3-start to-gradient-3-end text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Refine</h3>
                <p className="text-muted-foreground">Choose your favorite result and make adjustments if needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1-start to-gradient-1-end">Our AI-Generated Art</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {aiGeneratedImages.map((image, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image.url}
                    alt={`AI-generated image: ${image.prompt}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{image.prompt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1-start to-gradient-1-end">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$9.99", features: ["100 images/month", "Standard resolution", "Basic editing tools", "Email support"] },
                { name: "Pro", price: "$19.99", features: ["500 images/month", "High resolution", "Advanced editing tools", "Priority support", "API access"] },
                { name: "Enterprise", price: "Custom", features: ["Unlimited images", "Ultra-high resolution", "Full suite of tools", "Dedicated account manager", "Custom integrations"] }
              ].map((plan, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-gradient-1-start mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-gradient-2-start to-gradient-2-end text-white">
                    {index === 2 ? "Contact Sales" : "Get Started"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gradient-1-start to-gradient-1-end">Coming Soon</h2>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <VideoIcon className="h-12 w-12 text-gradient-2-start mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Image to Video AI</h3>
              <p className="text-muted-foreground mb-4 text-center">Transform your static images into captivating videos with our upcoming feature. Join the waitlist to be the first to experience this groundbreaking technology!</p>
              <div className="text-center">
                <Button className="bg-gradient-to-r from-gradient-2-start to-gradient-2-end text-white">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gradient-1-start/80 to-gradient-2-end/80"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Ideas into Images?</h2>
            <p className="text-xl mb-8 text-white/90">Join thousands of creators and businesses using Luunos AI today.</p>
            <Button size="lg" asChild className="bg-gradient-to-r from-gradient-2-start to-gradient-2-end text-white hover:from-gradient-2-end hover:to-gradient-2-start transition-all duration-300">
              <Link href="/dashboard">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}