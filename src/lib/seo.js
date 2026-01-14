/**
 * SEO utility functions for meta tags and structured data
 */

/**
 * Generate structured data (JSON-LD) for organization
 * @returns {Object} - Organization structured data
 */
export const getOrganizationSchema = () => {
    const email = import.meta.env.VITE_CONTACT_EMAIL || 'israkparvez@gmail.com';
    const phone = import.meta.env.VITE_CONTACT_PHONE || '+8801646846514';
    const address = import.meta.env.VITE_COMPANY_ADDRESS || '123 Dhaka, Bangladesh';

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Silio Digital",
        "description": "Professional digital marketing, web development, and branding agency",
        "url": "https://siliodigital.com",
        "logo": "https://siliodigital.com/public/triangle-512.png",
        "email": email,
        "telephone": phone,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dhaka",
            "addressCountry": "Bangladesh",
            "streetAddress": address
        },
        "sameAs": [
            import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com",
            import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com",
            import.meta.env.VITE_TWITTER_URL || "https://twitter.com"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": phone,
            "contactType": "customer service",
            "email": email,
            "availableLanguage": ["English", "Bengali"]
        }
    };
};

/**
 * Generate structured data for services
 * @returns {Object} - Service structured data
 */
export const getServiceSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Digital Marketing & Web Development",
        "provider": {
            "@type": "Organization",
            "name": "Silio Digital"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Bangladesh"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Logo Design & Branding"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Marketing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Social Media Management"
                    }
                }
            ]
        }
    };
};

/**
 * Update page title dynamically
 * @param {string} title - Page title
 */
export const updatePageTitle = (title) => {
    document.title = title ? `${title} | Silio Digital` : 'Silio Digital - Professional Digital Marketing & Web Development Agency';
};

/**
 * Update meta description dynamically
 * @param {string} description - Meta description
 */
export const updateMetaDescription = (description) => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', description);
    }
};

/**
 * Add structured data to page
 * @param {Object} schema - Structured data schema
 */
export const addStructuredData = (schema) => {
    // Remove existing structured data script if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
        existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
};
