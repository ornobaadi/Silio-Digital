/**
 * Security utility functions for input validation and sanitization
 */

/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';

    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Whether phone is valid
 */
export const isValidPhone = (phone) => {
    const phoneRegex = /^\+?[\d\s-()]+$/;
    return phoneRegex.test(phone);
};

/**
 * Sanitize URL to prevent open redirect attacks
 * @param {string} url - URL to sanitize
 * @returns {string|null} - Sanitized URL or null if invalid
 */
export const sanitizeUrl = (url) => {
    if (!url) return null;

    try {
        const parsedUrl = new URL(url);
        // Only allow http and https protocols
        if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
            return null;
        }
        return parsedUrl.toString();
    } catch {
        return null;
    }
};

/**
 * Validate string length
 * @param {string} str - String to validate
 * @param {number} min - Minimum length
 * @param {number} max - Maximum length
 * @returns {boolean} - Whether string length is valid
 */
export const isValidLength = (str, min = 1, max = 1000) => {
    if (typeof str !== 'string') return false;
    return str.length >= min && str.length <= max;
};

/**
 * Rate limiting helper (client-side)
 * @param {string} key - Unique key for the action
 * @param {number} limit - Maximum number of actions allowed
 * @param {number} windowMs - Time window in milliseconds
 * @returns {boolean} - Whether action is allowed
 */
export const checkRateLimit = (key, limit = 5, windowMs = 60000) => {
    const now = Date.now();
    const storageKey = `rateLimit_${key}`;

    try {
        const data = JSON.parse(localStorage.getItem(storageKey) || '{"count": 0, "timestamp": 0}');

        // Reset if window has passed
        if (now - data.timestamp > windowMs) {
            localStorage.setItem(storageKey, JSON.stringify({ count: 1, timestamp: now }));
            return true;
        }

        // Check if limit exceeded
        if (data.count >= limit) {
            return false;
        }

        // Increment count
        localStorage.setItem(storageKey, JSON.stringify({
            count: data.count + 1,
            timestamp: data.timestamp
        }));
        return true;
    } catch {
        return true; // Allow action if localStorage fails
    }
};

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @param {Object} rules - Validation rules
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateForm = (formData, rules) => {
    const errors = {};
    let isValid = true;

    Object.keys(rules).forEach(field => {
        const value = formData[field];
        const fieldRules = rules[field];

        if (fieldRules.required && (!value || value.trim() === '')) {
            errors[field] = `${field} is required`;
            isValid = false;
        }

        if (fieldRules.email && value && !isValidEmail(value)) {
            errors[field] = 'Invalid email format';
            isValid = false;
        }

        if (fieldRules.phone && value && !isValidPhone(value)) {
            errors[field] = 'Invalid phone format';
            isValid = false;
        }

        if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
            errors[field] = `Minimum length is ${fieldRules.minLength}`;
            isValid = false;
        }

        if (fieldRules.maxLength && value && value.length > fieldRules.maxLength) {
            errors[field] = `Maximum length is ${fieldRules.maxLength}`;
            isValid = false;
        }
    });

    return { isValid, errors };
};
