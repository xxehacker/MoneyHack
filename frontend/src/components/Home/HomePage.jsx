import React from "react";
import { FaMoneyBillWave, FaSignInAlt, FaList, FaChartPie, FaFilter } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ContactForm from "../Contact/ContactForm";

const HERO_STATS = [
  { value: "100+", label: "Active Users" },
  { value: "1000+", label: "Tracked Monthly" },
  { value: "4.9★", label: "User Rating" },
];

const FEATURES = [
  {
    icon: FaMoneyBillWave,
    title: "Smart Tracking",
    desc: "Automatically categorize and track every expense with AI-powered precision and real-time synchronization.",
    color: "emerald",
  },
  {
    icon: IoIosStats,
    title: "Real-time Insights",
    desc: "Get instant analytics and predictive insights that help you understand your spending patterns.",
    color: "blue",
  },
  {
    icon: FaFilter,
    title: "Custom Filters",
    desc: "Create personalized views and filters that match your unique financial management style.",
    color: "purple",
  },
];

const STEPS = [
  {
    icon: FaSignInAlt,
    title: "Create Your Account",
    desc: "Sign up with your email and set up your secure profile in under 60 seconds. No credit card required.",
    step: "1",
    color: "emerald",
  },
  {
    icon: FaList,
    title: "Enter Your Payments Information",
    desc: "Add you payments information and start tracking your expenses. It's that easy.",
    step: "2",
    color: "blue",
  },
  {
    icon: FaChartPie,
    title: "Start Managing",
    desc: "Watch as your expenses are categorized and analyzed. Get insights immediately.",
    step: "3",
    color: "purple",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    quote: "This app completely changed how I handle my business finances. The insights helped me save over $3,000 last year alone!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    color: "emerald",
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    quote: "The automated categorization is incredibly accurate. I've recommended this to all my entrepreneur friends. It's a game-changer.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    color: "blue",
  },
];

const CTA_TRUST = [
  { value: "256-bit", label: "Bank-Level Security", color: "cyan" },
  { value: "99.9%", label: "Uptime Guarantee", color: "blue" },
  { value: "24/7", label: "Expert Support", color: "purple" },
];

function Home() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-gray-900 min-h-screen">
      <div className="relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <circle cx="200" cy="200" r="150" fill="url(#gradient1)" opacity="0.1" />
          <circle cx="800" cy="300" r="200" fill="url(#gradient2)" opacity="0.1" />
          <circle cx="600" cy="700" r="180" fill="url(#gradient3)" opacity="0.1" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                New: AI-Powered Insights Available
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-gray-900">Master Your</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Financial Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform chaos into clarity with intelligent expense tracking that learns from your habits and grows with your ambitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10">Get Started Free</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
                <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold text-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
                    Watch Demo
                  </button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                {HERO_STATS.map(({ value, label }, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Monthly Overview</h3>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                          <FaMoneyBillWave className="text-white text-sm" />
                        </div>
                        <span className="font-medium text-gray-900">Income</span>
                      </div>
                      <span className="font-bold text-emerald-600">+$4,230</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <FaChartPie className="text-white text-sm" />
                        </div>
                        <span className="font-medium text-gray-900">Expenses</span>
                      </div>
                      <span className="font-bold text-blue-600">-$2,180</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border-2 border-emerald-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <IoIosStats className="text-white text-sm" />
                        </div>
                        <span className="font-medium text-gray-900">Savings</span>
                      </div>
                      <span className="font-bold text-gray-900">+$2,050</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Monthly Goal</span>
                      <span>82% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-bounce">
                <div className="text-2xl">💰</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 animate-pulse">
                <div className="text-2xl">📊</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Everything You Need in
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                One Place
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to simplify your financial life and help you make smarter money decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map(({ icon: Icon, title, desc, color }, idx) => (
              <div
                key={idx}
                className={`group p-8 bg-${color}-50 rounded-3xl border-2 border-${color}-200 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-${color}-50 rounded-2xl flex items-center justify-center ring-2 ring-white shadow-lg`}>
                    <Icon className={`text-2xl text-${color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Get Started in
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Minutes
              </span>
            </h2>
            <p className="text-xl text-gray-600">Simple steps to transform your financial management forever</p>
          </div>
          <div className="space-y-12">
            {STEPS.map(({ icon: Icon, title, desc, step, color }, idx) => (
              <div key={idx} className="flex items-start space-x-8 group">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-2xl text-white" />
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                    <div className={`px-3 py-1 bg-${color}-100 text-${color}-800 rounded-full text-sm font-semibold`}>
                      Step {step}
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Loved by
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-600">See what our users are saying about their financial transformation</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TESTIMONIALS.map(({ name, role, quote, avatar, rating }, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">"{quote}"</blockquote>
                  <div className="flex items-center space-x-4">
                    <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200" />
                    <div>
                      <div className="font-bold text-gray-900">{name}</div>
                      <div className="text-gray-600">{role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative py-32 px-6 bg-gradient-to-br from-blue-50 via-gray-200 to-emerald-100 text-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: "50px 50px" }}
        ></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-slate-900 text-sm font-semibold mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
            Limited Time: Get 30% Off Your First Year
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-700 via-emerald-900 to-slate-800 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-800 via-emerald-600 to-slate-700 bg-clip-text text-transparent">
              Financial Story
            </span>
          </h2>
          <p className="text-xl lg:text-2xl mb-16 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stop letting money stress control your life. Join over 50,000 users who've taken control of their finances and built the future they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/register">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <button className="group px-10 py-5 border-2 border-gray-600 hover:border-cyan-400 text-gray-900 hover:text-white rounded-2xl font-bold text-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 backdrop-blur-sm transition-all duration-300">
                <span className="flex items-center">
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Watch Success Stories
                </span>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {CTA_TRUST.map(({ value, label, color }, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-3xl font-bold text-${color}-400 mb-2`}>{value}</div>
                <div className="text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;