import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/automation" element={<ServiceDetail title="Business & AI Automation" description="End-to-end workflows across your tools with self-hosted n8n + AI." />} />
      <Route path="/services/custom-development" element={<ServiceDetail title="Custom Development & AI Products" description="Internal tools, data products, agent platforms, and everything in between." />} />
      <Route path="/services/consulting" element={<ServiceDetail title="Consulting & Strategy" description="Architecture, audits, and advisory when you need experienced calm hands." />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
