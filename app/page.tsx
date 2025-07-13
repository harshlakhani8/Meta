"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  ChevronDown,
  Menu,
  X,
  Play,
  ArrowRight,
  Star,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Target,
  Zap,
  Check,
  ExternalLink,
  Tag,
  User,
  TrendingUp,
  Heart,
  Search,
  // Facebook,
  // Youtube,
  // Linkedin,
  // Instagram,
  Twitter,
  Music,
} from "lucide-react"
import Image from "next/image";
import metaLogo from "@/assets/meta.jpg";
import googleLogo from "@/assets/Google.jpg";
import PBL from "@/assets/PBL.jpg";


export default function MetaMarcWebsite() {
  const [currentPage, setCurrentPage] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeFilter, setActiveFilter] = useState("All")

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const getCurrentPageName = () => {
    switch (currentPage) {
      case "home":
        return "Home"
      case "about":
        return "About"
      case "services":
        return "Services"
      case "works":
        return "Works"
      case "contact":
        return "Contact"
      case "blog":
        return "Blog"
      default:
        return "Home"
    }
  }

 // Data arrays
const socialIcons = [
  {
    name: "Facebook",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
        alt="Facebook"
        className="w-5 h-5"
      />
    ),
    url: "#",
    color: "hover:opacity-80"
  },
  {
    name: "YouTube",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
        alt="YouTube"
        className="w-5 h-5"
      />
    ),
    url: "#",
    color: "hover:opacity-80"
  },
  {
    name: "LinkedIn",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn"
        className="w-5 h-5"
      />
    ),
    url: "#",
    color: "hover:opacity-80"
  },
  {
    name: "Instagram",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram"
        className="w-5 h-5"
      />
    ),
    url: "#",
    color: "hover:opacity-80"
  },
  {
    name: "WhatsApp",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-5 h-5"
      />
    ),
    url: "#",
    color: "hover:opacity-80"
  },
  {
    name: "TikTok",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/TikTok_logo.svg"
        alt="TikTok"
        className="w-5 h-5"
      />
    ),
    url: "#",
    color: "hover:opacity-80"
  },
  {
    name: "Twitter",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
        alt="Twitter"
        className="w-5 h-5"
      />
    ),
    url: "#",
    color: "hover:opacity-80"
  }
];

  const services = [
    {
      title: "Social Media Management",
      description: "Complete social media strategy and content management across all platforms",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      icon: <Users className="w-8 h-8" />,
      features: ["Content Creation", "Community Management", "Analytics & Reporting", "Paid Advertising"],
      price: "Starting at $2,500/month",
    },
    {
      title: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      icon: <Star className="w-8 h-8" />,
      features: ["Influencer Outreach", "Campaign Management", "Performance Tracking", "ROI Analysis"],
      price: "Starting at $3,500/month",
    },
    {
      title: "Content Creation",
      description: "High-quality visual and video content that engages your audience",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      icon: <Zap className="w-8 h-8" />,
      features: ["Video Production", "Graphic Design", "Photography", "Copywriting"],
      price: "Starting at $2,000/month",
    },
    {
      title: "Social Media Advertising",
      description: "Targeted ad campaigns that drive conversions and maximize ROI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      icon: <Target className="w-8 h-8" />,
      features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "TikTok Ads"],
      price: "Starting at $1,500/month + ad spend",
    },
  ]

  const portfolio = [
    {
      title: "Fashion Forward Brand Campaign",
      category: "Social Media Marketing",
      client: "Luxe Fashion Co.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      results: { engagement: "+400%", followers: "+250K", sales: "+180%" },
      description:
        "Complete social media transformation for a luxury fashion brand, resulting in massive engagement growth and increased sales.",
      tags: ["Instagram", "TikTok", "Fashion", "Luxury"],
    },
    {
      title: "Tech Startup Product Launch",
      category: "Influencer Marketing",
      client: "InnovateTech",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      results: { reach: "2.5M+", conversions: "+320%", roi: "450%" },
      description:
        "Strategic influencer partnerships for a tech startup's product launch, achieving viral reach and exceptional ROI.",
      tags: ["Technology", "Product Launch", "Influencers", "B2B"],
    },
    {
      title: "Restaurant Chain Growth Campaign",
      category: "Content Creation",
      client: "Gourmet Delights",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      results: { orders: "+250%", engagement: "+300%", locations: "+15" },
      description:
        "Mouth-watering content creation and social media strategy that drove significant online orders and franchise expansion.",
      tags: ["Food & Beverage", "Photography", "Video", "Local Marketing"],
    },
    {
      title: "E-commerce Holiday Campaign",
      category: "Paid Advertising",
      client: "StyleHub Online",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      results: { revenue: "$500K+", roas: "6.2x", traffic: "+400%" },
      description:
        "High-converting paid social campaigns during holiday season, generating exceptional revenue and return on ad spend.",
      tags: ["E-commerce", "Facebook Ads", "Instagram Ads", "Holiday"],
    },
    {
      title: "Fitness Brand Community Building",
      category: "Social Media Management",
      client: "FitLife Studios",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      results: { community: "+100K", engagement: "+500%", memberships: "+200%" },
      description:
        "Built a thriving fitness community across social platforms, driving membership growth and brand loyalty.",
      tags: ["Fitness", "Community", "Instagram", "YouTube"],
    },
    {
      title: "Beauty Brand Influencer Campaign",
      category: "Influencer Marketing",
      client: "GlowUp Cosmetics",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
      results: { impressions: "5M+", ugc: "+1000", sales: "+300%" },
      description:
        "Comprehensive influencer marketing campaign featuring micro and macro influencers, generating massive user-generated content.",
      tags: ["Beauty", "Cosmetics", "UGC", "Micro-Influencers"],
    },
  ]

  const testimonials = [
    {
      name: "Riya Malhotrah",
      company: "Fashion Boutique Owner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Meta Marc took over our Instagram and grew us from 2K to 15K with consistent, creative content. Their social media management made all the difference!",
    },
    {
      name: "Amit Bansal",
      company: "E-commerce Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Our ROI has more than doubled since Meta Marc started managing our paid ads. Their expertise on both Meta and Google platforms is truly unmatched.",
    },
    {
      name: "Sneha Kapoor",
      company: "Skincare Brand Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Finding the right influencers felt impossible until Meta Marc stepped in. Their influencer marketing brought us genuine creators who actually fit our brand!",
    },
    {
      name: "Neeraj Jain",
      company: "Fitness Coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Our new website by Meta Marc looks sleek and converts like crazy. Their design and development team nailed the user experience.",
    },
    {
      name: "Lisa Wang",
      company: "Beauty Bliss",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The influencer partnerships they arranged were perfect for our brand. Sales skyrocketed by 250%!",
    },
    {
      name: "James Miller",
      company: "Tech Solutions Pro",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Professional, creative, and results-driven. Our B2B leads increased by 400% through LinkedIn campaigns.",
    },
  ]

  const clientLogos = [
     {
      name: "Pro Bodyline Fitness",
      image: "PBL.jpg",
      description: "Gym Equipments",
      industry: "Fitness",
    },
    {
      name: "Airtel",
      image: "/placeholder.svg?height=60&width=120",
      description: "Mobile Network",
      industry: "Network Services",
    },
    {
      name: "Tata Sky",
      image: "/placeholder.svg?height=60&width=120",
      description: "DTH Brand",
      industry: "Entertainment",
    },
    {
      name: "Westside",
      image: "/placeholder.svg?height=60&width=120",
      description: "Clothing",
      industry: "Fashion & Lifestyle",
    },
    {
      name: "McDonald's",
      image: "/placeholder.svg?height=60&width=120",
      description: "Fast Food Chain",
      industry: "Food & Beverage",
    },
    {
      name: "Amazon",
      image: "/placeholder.svg?height=60&width=120",
      description: "E-commerce Giant",
      industry: "E-commerce",
    },
    {
      name: "Google",
      image: "/placeholder.svg?height=60&width=120",
      description: "Search & Technology",
      industry: "Technology",
    },
    {
      name: "Microsoft",
      image: "/placeholder.svg?height=60&width=120",
      description: "Software Solutions",
      industry: "Technology",
    },
    {
      name: "Microsoft",
      image: "/placeholder.svg?height=60&width=120",
      description: "Software Solutions",
      industry: "Technology",
    },
    {
      name: "Microsoft",
      image: "/placeholder.svg?height=60&width=120",
      description: "Software Solutions",
      industry: "Technology",
    },
    {
      name: "Microsoft",
      image: "/placeholder.svg?height=60&width=120",
      description: "Software Solutions",
      industry: "Technology",
    },
     {
      name: "Microsoft",
      image: "/placeholder.svg?height=60&width=120",
      description: "Software Solutions",
      industry: "Technology",
    }
  ]

  const team = [
    {
      name: "Marc Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "10+ years in digital marketing with expertise in social media strategy and brand development.",
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer specializing in visual storytelling and brand identity.",
    },
    {
      name: "David Rodriguez",
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in community management and social media advertising across all platforms.",
    },
    {
      name: "Emily Watson",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Specialist in content marketing and influencer partnerships with proven ROI results.",
    },
  ]

  const blogPosts = [
    {
      title: "10 Social Media Trends That Will Dominate 2024",
      excerpt:
        "Stay ahead of the curve with these emerging social media trends that will shape the digital landscape in 2024.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "Trends",
      author: "Marc Johnson",
      date: "December 15, 2023",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "How to Create Viral Content: A Step-by-Step Guide",
      excerpt:
        "Learn the secrets behind viral content and how to apply these strategies to your own social media campaigns.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      category: "Social Media Tips",
      author: "Sarah Chen",
      date: "December 12, 2023",
      readTime: "8 min read",
      featured: false,
    },
    {
      title: "Case Study: How We Increased Brand Engagement by 400%",
      excerpt:
        "Deep dive into our successful campaign for a fashion brand and the strategies that led to exceptional results.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      category: "Case Studies",
      author: "David Rodriguez",
      date: "December 10, 2023",
      readTime: "12 min read",
      featured: true,
    },
    {
      title: "The Rise of Micro-Influencers: Why Smaller is Better",
      excerpt:
        "Discover why micro-influencers are becoming the preferred choice for brands and how to work with them effectively.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      category: "Marketing Strategy",
      author: "Emily Watson",
      date: "December 8, 2023",
      readTime: "6 min read",
      featured: false,
    },
    {
      title: "Instagram Algorithm Changes: What Marketers Need to Know",
      excerpt: "Stay updated with the latest Instagram algorithm changes and how they affect your content strategy.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
      category: "Industry News",
      author: "Marc Johnson",
      date: "December 5, 2023",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "Building a Social Media Content Calendar That Works",
      excerpt:
        "Learn how to create and maintain an effective content calendar that keeps your social media strategy on track.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
      category: "Social Media Tips",
      author: "Sarah Chen",
      date: "December 3, 2023",
      readTime: "10 min read",
      featured: false,
    },
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@metamarc.agency", "support@metamarc.agency"],
      action: "Send Email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call Now",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Marketing Street", "New York, NY 10001"],
      action: "Get Directions",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM EST", "Sat-Sun: By Appointment"],
      action: "Schedule Meeting",
    },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We're passionate about helping brands tell their stories and connect with their audiences.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Every strategy we create is designed to deliver measurable results and ROI.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of trends and use cutting-edge tools to keep our clients competitive.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve their business goals.",
    },
  ]

  const stats = [
    { number: "500+", label: "Successful Campaigns" },
    { number: "50M+", label: "Social Media Impressions" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$1,500",
      period: "/month",
      description: "Perfect for small businesses getting started with social media",
      features: [
        "2 social media platforms",
        "12 posts per month",
        "Basic analytics reporting",
        "Community management",
        "Monthly strategy call",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$3,500",
      period: "/month",
      description: "Ideal for growing businesses looking to scale their presence",
      features: [
        "4 social media platforms",
        "24 posts per month",
        "Advanced analytics & reporting",
        "Community management",
        "Content creation included",
        "Bi-weekly strategy calls",
        "Basic paid advertising",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$6,500",
      period: "/month",
      description: "Comprehensive solution for established brands",
      features: [
        "All social media platforms",
        "40+ posts per month",
        "Full analytics suite",
        "24/7 community management",
        "Premium content creation",
        "Weekly strategy calls",
        "Advanced paid advertising",
        "Influencer partnerships",
        "Crisis management",
      ],
      popular: false,
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your brand, goals, and target audience to create a tailored strategy.",
    },
    {
      step: "02",
      title: "Content Planning",
      description: "Our team develops a comprehensive content calendar aligned with your brand voice and objectives.",
    },
    {
      step: "03",
      title: "Creation & Execution",
      description: "We create high-quality content and execute your social media strategy across all platforms.",
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuous monitoring and optimization based on performance data and audience feedback.",
    },
  ]

  const categories = ["All", "Social Media Tips", "Industry News", "Case Studies", "Marketing Strategy", "Trends"]
  const filters = ["All", "Social Media Management", "Influencer Marketing", "Content Creation", "Paid Advertising"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const filteredProjects =
    activeFilter === "All" ? portfolio : portfolio.filter((project) => project.category === activeFilter)

  // Header Component
  const renderHeader = () => (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <button onClick={() => setCurrentPage("home")} className="text-center">
              <div className="relative">
                <div className="text-xl md:text-2xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-black bg-clip-text text-transparent">
                    Meta
                  </span>
                  <span className="font-black ml-1" style={{ color: "#4AD6AC" }}>
                    Marc
                  </span>
                </div>
                <div className="text-xs text-slate-600 font-medium tracking-[0.15em] uppercase mt-0.5 opacity-80">
                  Your Success, Our Strategy
                </div>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-[#4AD6AC] to-[#4AD6AC] mt-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <motion.button
              className="flex items-center text-slate-700 hover:text-[#4AD6AC] transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a meeting
            </motion.button>

            {[
              { name: "Home", page: "home" },
              { name: "About", page: "about" },
              { name: "Services", page: "services" },
              { name: "Works", page: "works" },
              { name: "Blog", page: "blog" },
              { name: "Contact", page: "contact" },
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <button
                  onClick={() => setCurrentPage(item.page)}
                  className={`text-slate-700 hover:text-[#4AD6AC] transition-colors text-sm ${
                    currentPage === item.page ? "text-[#4AD6AC] font-semibold" : ""
                  }`}
                >
                  {item.name}
                  {/* {item.name === "Services" && <ChevronDown className="w-4 h-4 ml-1 inline" />} */}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Current Page Indicator */}
          <motion.div
            className="hidden lg:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#4AD6AC]/20 text-[#4AD6AC] px-3 py-1.5 rounded-full text-sm font-semibold border border-[#4AD6AC]/30">
              <span className="mr-2">📍</span>
              {getCurrentPageName()}
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              <div className="text-center pb-4 border-b border-slate-200">
                <div className="text-lg font-black tracking-tight">
                  <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-black bg-clip-text text-transparent">
                    Meta
                  </span>
                  <span className="font-black ml-1" style={{ color: "#4AD6AC" }}>
                    Marc
                  </span>
                </div>
                <div className="text-xs font-medium tracking-[0.15em] uppercase mt-0.5 opacity-80">
                  Your Success, Our Strategy
                </div>
              </div>

              <div className="bg-[#4AD6AC]/20 text-[#4AD6AC] px-4 py-2 rounded-full text-sm font-semibold border border-[#4AD6AC]/30 text-center">
                <span className="mr-2">📍</span>
                {getCurrentPageName()}
              </div>

              {[
                { name: "Home", page: "home" },
                { name: "About", page: "about" },
                { name: "Services", page: "services" },
                { name: "Works", page: "works" },
                { name: "Blog", page: "blog" },
                { name: "Contact", page: "contact" },
              ].map((item) => (
                <motion.div key={item.name} whileHover={{ x: 10 }}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.page)
                      setIsMenuOpen(false)
                    }}
                    className={`block w-full text-left text-slate-700 hover:text-[#4AD6AC] transition-colors ${
                      currentPage === item.page ? "text-[#4AD6AC] font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )

  // Home Page Component
  const renderHomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1920&h=1080&fit=crop"
            alt="Social Media Marketing Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              <br />
              <span className="italic">CRAFT YOUR</span>
              <br />
              <span className="tracking-tight">SUCCESS</span>
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
              <span className="text-white font-light">WITH</span>
              <span className="text-[#4AD6AC] font-black tracking-wide ml-2">META MARC</span>
            </h2>

            <motion.div
              className="w-32 h-1 bg-[#4AD6AC] mx-auto mb-16"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.button
                className="bg-[#4AD6AC] hover:bg-[#3bc49a] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage("contact")}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            // className="flex items-center justify-center gap-8"
            className="  hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-8"

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <Image src={metaLogo} alt="Meta Business Partner" width={24} height={24} />

                
                <div>
                  <div className="text-slate-600 text-sm">Meta Business Partner</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <Image src={googleLogo} alt="Meta Business Partner" width={24} height={24} />

                <div>
                  <div className="text-slate-600 text-sm">Google Certified Partner</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
          <motion.div
            className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-[#4AD6AC] to-[#3bc49a] transform -skew-y-2 origin-bottom-left"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive social media marketing solutions designed to elevate your brand presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-[#000000] flex items-center">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Work</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing successful social media campaigns that drive real business results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#4AD6AC] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h4>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <motion.button
                    className="text-[#4AD6AC] hover:text-[#3bc49a] font-semibold flex items-center"
                    whileHover={{ x: 5 }}
                    onClick={() => setCurrentPage("works")}
                  >
                    View Project <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Success Stories</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {"Don't just take our word for it - hear from our satisfied clients"}
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [0, -100 * testimonials.length] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: `${testimonials.length * 400}px` }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 min-w-[350px] cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(74, 214, 172, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <motion.h5 className="text-white font-semibold" whileHover={{ color: "#4AD6AC" }}>
                        {testimonial.name}
                      </motion.h5>
                      <p className="text-slate-300 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <motion.div className="flex mb-4" whileHover={{ scale: 1.1 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div key={i} whileHover={{ scale: 1.2, rotate: 15 }} transition={{ delay: i * 0.1 }}>
                        <Star className="w-5 h-5 text-[#4AD6AC] fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.p className="text-slate-300 italic" whileHover={{ color: "#e2e8f0" }}>
                    {`"${testimonial.text}"`}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Leading Brands</h4>
            <p className="text-lg text-slate-600">
              We've helped these amazing companies achieve their social media goals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center mb-16">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                className="group relative bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-[#4AD6AC] transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  rotate: [0, -2, 2, 0],
                }}
              >
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <motion.div className="w-full h-16 bg-gradient-to-r from-slate-200 to-slate-300 rounded flex items-center justify-center transition-all duration-300 group-hover:from-[#4AD6AC]/20 group-hover:to-[#3bc49a]/20">
                    {/* <span className="text-slate-600 font-bold text-sm">{client.name}</span> logo title */}
                  </motion.div>
                </div>

                <motion.h5
                  className="text-center font-bold text-slate-800 group-hover:text-[#4AD6AC] transition-colors duration-300 text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {client.name}
                </motion.h5>

                <motion.div
                  className="text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <span className="bg-[#4AD6AC]/20 text-[#4AD6AC] px-2 py-1 rounded-full text-xs font-semibold">
                    {client.industry}
                  </span>
                </motion.div>

                <motion.p
                  className="text-center text-xs text-slate-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {client.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4AD6AC] to-[#3bc49a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Social Media?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {"Let's discuss how we can help you achieve your social media goals and drive real results."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#4AD6AC] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage("contact")}
              >
                Start Your Campaign
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-[#4AD6AC] px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )

  // About Page Component
  const renderAboutPage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Meta Marc</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              {
                "We're a passionate team of social media experts dedicated to helping brands build meaningful connections and drive real business results through strategic digital marketing."
              }
            </p>
            <div className="w-32 h-1 bg-[#4AD6AC] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2019, Meta Marc Agency began with a simple mission: to help businesses harness the power of
                social media to build authentic relationships with their customers.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                What started as a small team of social media enthusiasts has grown into a full-service digital marketing
                agency, serving clients from startups to Fortune 500 companies.
              </p>
              <p className="text-lg text-slate-600">
                {
                  "Today, we're proud to be recognized as industry leaders in social media marketing, with a track record of delivering exceptional results for our clients."
                }
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Impact</h2>
            <p className="text-xl text-slate-600">Numbers that speak to our success</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#4AD6AC] mb-2">{stat.number}</div>
                <div className="text-slate-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Values</h2>
            <p className="text-xl text-slate-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 rounded-lg border hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-[#4AD6AC] mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-slate-600">The talented individuals behind our success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-[#4AD6AC] font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4AD6AC] to-[#3bc49a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-white/90 mb-8">
              {"Let's discuss how we can help your brand achieve its social media goals."}
            </p>
            <motion.button
              className="bg-white text-[#4AD6AC] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage("contact")}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )

  // Services Page Component
  const renderServicesPage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive social media marketing solutions designed to elevate your brand and drive real business
              results across all digital platforms.
            </p>
            <div className="w-32 h-1 bg-[#4AD6AC] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[#4AD6AC] text-white p-2 rounded-lg">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-600">
                        <Check className="w-4 h-4 text-[#4AD6AC] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#4AD6AC]">{service.price}</span>
                    <motion.button
                      className="text-[#4AD6AC] hover:text-[#3bc49a] font-semibold flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Process</h2>
            <p className="text-xl text-slate-600">How we deliver exceptional results for our clients</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#4AD6AC] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Service Packages</h2>
            <p className="text-xl text-slate-600">Choose the perfect package for your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`bg-white rounded-xl shadow-lg border-2 p-8 relative ${
                  pkg.popular ? "border-[#4AD6AC] transform scale-105" : "border-slate-200"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#4AD6AC] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-[#4AD6AC] mb-2">
                    {pkg.price}
                    <span className="text-lg text-slate-600">{pkg.period}</span>
                  </div>
                  <p className="text-slate-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-600">
                      <Check className="w-5 h-5 text-[#4AD6AC] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? "bg-[#4AD6AC] text-white hover:bg-[#3bc49a]"
                      : "border-2 border-[#4AD6AC] text-[#4AD6AC] hover:bg-[#4AD6AC] hover:text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4AD6AC] to-[#3bc49a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              {"Let's discuss which services are right for your business and create a custom strategy."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#4AD6AC] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage("contact")}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-[#4AD6AC] px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage("works")}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )

  // Works Page Component
  const renderWorksPage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Work</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Explore our portfolio of successful social media campaigns and see how we've helped brands achieve
              remarkable results across various industries.
            </p>
            <div className="w-32 h-1 bg-[#4AD6AC] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-[#4AD6AC] text-white"
                    : "bg-white text-slate-600 hover:bg-[#4AD6AC]/20 hover:text-[#4AD6AC]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#4AD6AC] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <motion.button
                      className="bg-white/90 text-slate-700 p-2 rounded-full hover:bg-white transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-[#4AD6AC] font-semibold mb-3">{project.client}</p>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-[#4AD6AC]">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="text-[#4AD6AC] hover:text-[#3bc49a] font-semibold flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Impact</h2>
            <p className="text-xl text-slate-600">The results speak for themselves</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, number: "500+", label: "Successful Campaigns" },
              { icon: <Users className="w-8 h-8" />, number: "50M+", label: "People Reached" },
              { icon: <Heart className="w-8 h-8" />, number: "98%", label: "Client Satisfaction" },
              { icon: <TrendingUp className="w-8 h-8" />, number: "300%", label: "Average Growth" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-[#4AD6AC] mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4AD6AC] to-[#3bc49a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-white/90 mb-8">
              {"Let's create a campaign that delivers exceptional results for your brand."}
            </p>
            <motion.button
              className="bg-white text-[#4AD6AC] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage("contact")}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )

  // Contact Page Component
  const renderContactPage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Ready to transform your social media presence? Let's discuss how we can help your brand achieve its goals
              and drive real results.
            </p>
            <div className="w-32 h-1 bg-[#4AD6AC] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white rounded-xl shadow-lg p-6 text-center border hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-[#4AD6AC] mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-slate-600">
                      {detail}
                    </p>
                  ))}
                </div>
                <motion.button
                  className="text-[#4AD6AC] hover:text-[#3bc49a] font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {info.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Start Your Project</h2>
            <p className="text-xl text-slate-600">
              {"Fill out the form below and we'll get back to you within 24 hours."}
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4AD6AC] focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4AD6AC] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4AD6AC] focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4AD6AC] focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4AD6AC] focus:border-transparent transition-all"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $2,500/month">Under $2,500/month</option>
                  <option value="$2,500 - $5,000/month">$2,500 - $5,000/month</option>
                  <option value="$5,000 - $10,000/month">$5,000 - $10,000/month</option>
                  <option value="$10,000 - $25,000/month">$10,000 - $25,000/month</option>
                  <option value="$25,000+/month">$25,000+/month</option>
                  <option value="Project-based">Project-based</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4AD6AC] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#4AD6AC] hover:bg-[#3bc49a] text-white py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to see results?",
                answer:
                  "Most clients start seeing improved engagement within 2-4 weeks, with significant growth typically occurring within 2-3 months of consistent strategy implementation.",
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer:
                  "Yes! We work with startups, small businesses, and large enterprises. Our strategies are tailored to fit your specific needs and budget.",
              },
              {
                question: "What platforms do you manage?",
                answer:
                  "We manage all major social media platforms including Instagram, Facebook, TikTok, LinkedIn, Twitter, YouTube, and emerging platforms as they gain traction.",
              },
              {
                question: "Can I see examples of your work?",
                answer:
                  "Check out our Works page for detailed case studies and examples of successful campaigns we've executed for various clients.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-white rounded-lg shadow-lg p-6 border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4AD6AC] to-[#3bc49a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Prefer to Talk Directly?</h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free 30-minute consultation to discuss your social media goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#4AD6AC] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Call
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-[#4AD6AC] px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Live Chat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )

  // Blog Page Component
  const renderBlogPage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest social media trends, tips, and insights from our team of experts.
            </p>
            <div className="w-32 h-1 bg-[#4AD6AC] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4AD6AC] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-[#4AD6AC] text-white"
                      : "bg-white text-slate-600 hover:bg-[#4AD6AC]/20 hover:text-[#4AD6AC]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Articles</h2>
              <p className="text-slate-600">Our most popular and insightful content</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <motion.article
                    key={post.title}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#4AD6AC] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Tag className="w-3 h-3 mr-1" />
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-[#4AD6AC] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <motion.button
                        className="text-[#4AD6AC] hover:text-[#3bc49a] font-semibold flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-slate-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "All" ? blogPosts.filter((post) => !post.featured) : filteredPosts).map(
              (post, index) => (
                <motion.article
                  key={post.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#4AD6AC] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 hover:text-[#4AD6AC] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{post.readTime}</span>
                      <motion.button
                        className="text-[#4AD6AC] hover:text-[#3bc49a] font-semibold flex items-center text-sm"
                        whileHover={{ x: 5 }}
                      >
                        Read More <ArrowRight className="ml-1 w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4AD6AC] to-[#3bc49a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter and never miss the latest social media insights and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <motion.button
                className="bg-white text-[#4AD6AC] px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )

  // Footer Component
  const renderFooter = () => (
    <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Meta</span>
              <span className="text-[#4AD6AC] ml-1">Marc</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Crafting social media success stories through innovative strategies and creative content.
            </p>
            <div className="flex space-x-3">
              {socialIcons.slice(0, 4).map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={`text-slate-400 transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Services</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <button onClick={() => setCurrentPage("services")} className="hover:text-[#4AD6AC] transition-colors">
                  Social Media Management
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("services")} className="hover:text-[#4AD6AC] transition-colors">
                  Influencer Marketing
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("services")} className="hover:text-[#4AD6AC] transition-colors">
                  Content Creation
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("services")} className="hover:text-[#4AD6AC] transition-colors">
                  Social Media Advertising
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <button onClick={() => setCurrentPage("about")} className="hover:text-[#4AD6AC] transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("works")} className="hover:text-[#4AD6AC] transition-colors">
                  Works
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("blog")} className="hover:text-[#4AD6AC] transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("contact")} className="hover:text-[#4AD6AC] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Contact Info</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>📧 Metamarc25@gmail.com</li>
              <li>📞 +91 9413788357</li>
              <li>📍 Daksh Residency, Pratapnagar, Jaipur</li>
              <li>🕒 Mon-Sat 9AM-6PM EST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Meta Marc. All rights reserved. | Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  )

  // Main render function
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return renderHomePage()
      case "about":
        return renderAboutPage()
      case "services":
        return renderServicesPage()
      case "works":
        return renderWorksPage()
      case "contact":
        return renderContactPage()
      case "blog":
        return renderBlogPage()
      default:
        return renderHomePage()
    }
  }

  return (
    <div className="min-h-screen">
      {renderHeader()}
      {renderCurrentPage()}
      {renderFooter()}

      {/* WhatsApp Float Button */}
<motion.div
  className="fixed bottom-6 right-6 z-50"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5, delay: 2 }}
>
  <a
    href="https://wa.me/918003957658?text=Hello%20Sir%2C%20I%E2%80%99m%20interested%20in%20availing%20digital%20marketing%20and%20IT%20services%20from%20Meta%20Marc.%20Could%20you%20please%20guide%20me%20through%20the%20process%20and%20share%20the%20details%3F%20Looking%20forward%20to%20your%20response"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.button
      className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Official WhatsApp icon from CDN */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-12 h-12"
      />
    </motion.button>
  </a>
</motion.div>



      {/* Language Selector */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
          <div className="flex items-center space-x-2 text-white text-sm">
            <span className="text-lg">🇺🇸</span>
            <span>English</span>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-4 max-w-4xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold">Our Story</h4>
                <button onClick={() => setIsVideoPlaying(false)} className="text-slate-500 hover:text-slate-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">Video content would be embedded here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Mouse Pointer */}
      <motion.div
        className="fixed w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="fixed w-2 h-2 bg-[#4AD6AC] rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
    </div>
  )
}
