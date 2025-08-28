import { Badge } from "../ui/badge"

export const sections = [
  {
    id: "hero",
    subtitle: (
      <Badge variant="outline" className="text-white border-white">
        Edgo.dev
      </Badge>
    ),
    title: "Lightning-fast global delivery.",
    showButton: true,
    buttonText: "Get Started",
  },
  {
    id: "about",
    title: "Why Edgo.dev?",
    content:
      "Our edge acceleration CDN delivers your content from 200+ global locations with 99.9% uptime and sub-50ms latency worldwide.",
  },
  {
    id: "features",
    title: "Powerful Features",
    content:
      "Real-time analytics, automatic image optimization, DDoS protection, and intelligent caching that adapts to your traffic patterns.",
  },
  {
    id: "performance",
    title: "Blazing Performance",
    content:
      "Experience up to 10x faster load times with our intelligent edge caching and global network infrastructure.",
  },
  {
    id: "join",
    title: "Start Accelerating",
    content:
      "Ready to supercharge your website performance? Join thousands of developers using Edgo.dev for lightning-fast content delivery.",
    showButton: true,
    buttonText: "Contact US",
  },
]
