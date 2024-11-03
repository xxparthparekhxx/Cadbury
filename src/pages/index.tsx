import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Github, Server, Webhook, Terminal } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16 pt-4">
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold bg-clip-text  bg-gradient-to-r from-primary to-primary/60">
              CadburyCICD
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="mb-4">
                Coming Soon 🚀
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="#waitlist">
                Join Beta <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mb-6 bg-clip-text  bg-gradient-to-r from-primary to-primary/60">
            Self-Hosted CI/CD
            <br />
            <span className="text-foreground">
              Your Infrastructure, Your Rules
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Take control of your deployment pipeline with a powerful self-hosted
            CI/CD solution. Configure webhooks, run custom scripts, and manage
            your infrastructure - all in one place.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Server className="h-10 w-10 text-primary" />,
                title: "Self Hosted",
                description:
                  "Deploy on your own infrastructure with complete data sovereignty",
              },
              {
                icon: <Webhook className="h-10 w-10 text-primary" />,
                title: "Custom Webhooks",
                description:
                  "Seamless integration with any git provider or external service",
              },
              {
                icon: <Terminal className="h-10 w-10 text-primary" />,
                title: "Script Freedom",
                description:
                  "Execute any build, test, or deployment script without limitations",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-muted hover:border-primary/20 transition-all duration-300"
              >
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card
            id="waitlist"
            className="p-8 border-2 border-muted bg-secondary/10 backdrop-blur-sm"
          >
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Get Early Access</CardTitle>
              <CardDescription>
                Join the waitlist for exclusive beta access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="flex gap-4 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background"
                />
                <Button type="submit" size="lg">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <Separator className="my-16" />

          <footer className="text-center text-sm text-muted-foreground">
            <p>© 2024 CadburyCICD. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
