# Security Guidelines & Best Practices 🔐

This document outlines the security measures implemented in the Silio Digital Portfolio project and best practices for maintaining security.

## 🛡️ Implemented Security Measures

### 1. Input Sanitization

All user inputs are sanitized to prevent Cross-Site Scripting (XSS) attacks.

**Implementation:**
- `sanitizeInput()` function in `/src/lib/security.js`
- Applied to all form fields before processing
- Escapes HTML special characters

**Usage:**
```javascript
import { sanitizeInput } from '@/lib/security';

const cleanInput = sanitizeInput(userInput);
```

### 2. Form Validation

Comprehensive validation for all form inputs with custom rules.

**Features:**
- Email format validation
- Phone number format validation
- String length validation
- Required field validation
- Real-time error feedback

**Implementation:**
```javascript
const validationRules = {
  email: { required: true, email: true },
  name: { required: true, minLength: 2, maxLength: 50 }
};

const { isValid, errors } = validateForm(formData, validationRules);
```

### 3. Rate Limiting

Client-side rate limiting prevents spam and abuse.

**Configuration:**
- Contact form: Max 3 submissions per 5 minutes
- Stored in localStorage
- Automatic reset after time window

**How it works:**
```javascript
if (!checkRateLimit('contact_form', 3, 300000)) {
  // Show error: Too many submissions
  return;
}
```

### 4. Environment Variables

Sensitive data is stored in environment variables, not in source code.

**Protected Data:**
- Email addresses
- Phone numbers
- API keys (if any)
- Social media links

**Setup:**
1. Copy `.env.example` to `.env`
2. Update with actual values
3. Never commit `.env` to version control

### 5. Security Headers

Meta tags implemented for basic security headers:

```html
<!-- Prevent MIME type sniffing -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">

<!-- Prevent clickjacking -->
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">

<!-- Enable XSS filter -->
<meta http-equiv="X-XSS-Protection" content="1; mode=block">

<!-- Referrer policy -->
<meta name="referrer" content="strict-origin-when-cross-origin">
```

### 6. Error Boundary

React Error Boundary prevents app crashes and handles errors gracefully.

**Features:**
- Catches JavaScript errors anywhere in component tree
- Logs error details in development
- Shows user-friendly error UI
- Provides recovery options

### 7. URL Sanitization

Prevents open redirect attacks by validating URLs.

**Implementation:**
```javascript
const safeUrl = sanitizeUrl(userProvidedUrl);
if (!safeUrl) {
  // Invalid or unsafe URL
}
```

## 🔒 Security Best Practices

### For Developers

1. **Never hardcode sensitive data**
   - Use environment variables
   - Keep `.env` out of version control
   - Use `.env.example` as template

2. **Validate all inputs**
   - Client-side validation for UX
   - Server-side validation for security (if backend exists)
   - Never trust user input

3. **Keep dependencies updated**
   ```bash
   npm audit
   npm audit fix
   npm update
   ```

4. **Use HTTPS in production**
   - Enforce HTTPS
   - Use secure cookies (when implemented)
   - Set secure headers

5. **Implement proper error handling**
   - Don't expose sensitive information in errors
   - Log errors for debugging
   - Show user-friendly messages

### For Deployment

1. **Configure Security Headers**
   
   Add to your hosting configuration:
   
   ```
   # Content Security Policy
   Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://wa.me;
   
   # Strict Transport Security
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   
   # X-Frame-Options
   X-Frame-Options: SAMEORIGIN
   
   # X-Content-Type-Options
   X-Content-Type-Options: nosniff
   
   # Referrer Policy
   Referrer-Policy: strict-origin-when-cross-origin
   
   # Permissions Policy
   Permissions-Policy: geolocation=(), microphone=(), camera=()
   ```

2. **Firebase Hosting Configuration**
   
   Add to `firebase.json`:
   
   ```json
   {
     "hosting": {
       "headers": [
         {
           "source": "**",
           "headers": [
             {
               "key": "X-Content-Type-Options",
               "value": "nosniff"
             },
             {
               "key": "X-Frame-Options",
               "value": "SAMEORIGIN"
             },
             {
               "key": "X-XSS-Protection",
               "value": "1; mode=block"
             },
             {
               "key": "Strict-Transport-Security",
               "value": "max-age=31536000; includeSubDomains"
             }
           ]
         }
       ]
     }
   }
   ```

3. **Enable CORS properly**
   - Only allow trusted origins
   - Don't use wildcard (*) in production

## 🚨 Common Vulnerabilities to Avoid

### 1. Cross-Site Scripting (XSS)
**Prevention:** 
- ✅ Sanitize all user inputs
- ✅ Use React's built-in escaping
- ✅ Avoid `dangerouslySetInnerHTML`

### 2. Cross-Site Request Forgery (CSRF)
**Prevention:**
- ✅ Use CSRF tokens (when backend exists)
- ✅ Verify request origins
- ✅ Use SameSite cookie attribute

### 3. SQL Injection
**Not applicable** - No database in current implementation
**Future:** Use parameterized queries if database is added

### 4. Open Redirects
**Prevention:**
- ✅ Validate all URLs
- ✅ Use `sanitizeUrl()` function
- ✅ Whitelist allowed domains

### 5. Rate Limiting Bypass
**Prevention:**
- ✅ Client-side rate limiting implemented
- ⚠️ Server-side rate limiting recommended for production

### 6. Information Disclosure
**Prevention:**
- ✅ Error boundary hides error details in production
- ✅ Don't log sensitive data
- ✅ Use environment variables

## 📋 Security Checklist

Before deploying to production:

- [ ] All environment variables are set
- [ ] `.env` is in `.gitignore`
- [ ] Security headers are configured
- [ ] HTTPS is enforced
- [ ] Dependencies are up to date (`npm audit`)
- [ ] Error boundary is working
- [ ] Form validation is working
- [ ] Rate limiting is working
- [ ] Input sanitization is applied
- [ ] No sensitive data in source code
- [ ] No console.log with sensitive data
- [ ] Production build tested
- [ ] CSP headers configured
- [ ] Backup/disaster recovery plan

## 🔄 Regular Maintenance

### Weekly
- [ ] Check for dependency updates
- [ ] Review error logs

### Monthly
- [ ] Run security audit: `npm audit`
- [ ] Update dependencies
- [ ] Review and update security policies

### Quarterly
- [ ] Full security review
- [ ] Update security documentation
- [ ] Test error handling
- [ ] Review access controls

## 📞 Reporting Security Issues

If you discover a security vulnerability, please email:
**israkparvez@gmail.com**

**Do NOT** create public GitHub issues for security vulnerabilities.

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://react.dev/learn/security)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [npm Security](https://docs.npmjs.com/packages-and-modules/securing-your-code)

---

**Last Updated:** January 2026  
**Security Level:** Enhanced ✅
