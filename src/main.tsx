import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Layout from './components/layouts/Layout.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AboutPage from './pages/About.tsx'
import BlogPage from './pages/Blog.tsx'
import StoreFinderPage from './pages/StoreFinder.tsx'
import ShopPage from './pages/Shop.tsx'
import SupportPage from './pages/Support.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy.tsx'
import TermsOfServicePage from './pages/TermsOfService.tsx'
import ProductPage from './pages/Product.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/product/:productId' element={<ProductPage />} />

          <Route path='/blog' element={<BlogPage />} />
          <Route path='/finder' element={<StoreFinderPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/terms-of-service' element={<TermsOfServicePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
