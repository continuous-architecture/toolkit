---
title: "Privacy Policy"
meta_title: "Privacy Policy – Your Privacy, Our Commitment"
description: "Learn how we process anonymized, cookie-free audience measurements with a self-hosted instance of Matomo."
draft: false
---

### Privacy Policy

Your privacy matters to us. This website is a community blog, and we are committed to keeping your data protected and to limiting the information we collect to what is strictly necessary.

## 1. Data We Collect (Audience Measurement Only)

We use **Matomo**, a self‑hosted analytics tool, to measure our website’s audience and improve its content.  
This processing is fully compliant with privacy regulations and is configured following Matomo’s “cookieless” and privacy‑friendly guidelines.

Here is what this means in practice:

- **No personal data is collected.**
- **IP addresses are fully anonymized** so we cannot identify visitors.
- **No data is shared with third parties**.
- **No cookie is stored on your device** for audience measurement.
- **The collected data is used exclusively for statistical purposes**, such as understanding which pages are most visited or detecting site errors.

### Data Retention
Anonymized analytics data is kept for **13 months**, which is the recommended period for audience measurement statistics.

## 2. Legal Basis

Because our use of Matomo is:

- self‑hosted,
- cookie‑less,
- anonymized,
- not shared with third parties,
- and used only for audience measurement,

it is considered **exempt from consent** under EU/FR guidance.

The legal basis for processing is therefore **legitimate interest** (Article 6(1)(f) GDPR).

## 3. Your Rights

Even without cookies or identifiable data, you have the right to **object to audience measurement** at any time.

You can disable measurement below:


<div id="analytics-optout" style="margin:1rem 0;">
  <p>
    You can <strong>object</strong> to audience measurement at any time.  
    Your choice will be saved <em>without cookies</em> (using your browser’s local storage).
  </p>

  <button id="optout-btn" type="button" style="padding:.6rem 1rem; cursor:pointer;">
    Loading...
  </button>

  <p id="optout-status" style="margin-top:.5rem; color:#555;"></p>
</div>

<script>
  (function() {
    const KEY = 'analytics_optout';
    const btn = document.getElementById('optout-btn');
    const status = document.getElementById('optout-status');

    function isOptedOut() {
      return localStorage.getItem(KEY) === 'true';
    }

    function render() {
      if (isOptedOut()) {
        btn.textContent = 'Enable audience measurement (opt-in)';
        status.textContent = 'Current status: audience measurement is disabled for this browser.';
      } else {
        btn.textContent = 'Disable audience measurement (opt‑out)';
        status.textContent = 'Current status: audience measurement is enabled (anonymized, cookie‑free)';
      }
    }

    btn.addEventListener('click', function() {
      if (isOptedOut()) {
        localStorage.removeItem(KEY); // opt-in
      } else {
        localStorage.setItem(KEY, 'true'); // opt-out
      }
      render();
      if (confirm('Your preference has been saved. Would you like to reload the page now?')) {
        location.reload();
      }
    });

    render();
  })();
</script>


This will exclude your visits from anonymized statistical reports.


## 4. External Links

This website may include links to external services (e.g., videos, articles, other sites).  
Those third‑party sites may process data according to their own policies.  
We encourage you to read their privacy statements when visiting them.

## 5. Updates to This Policy

If we change our analytics configuration or the data we process, we will update this page.  
The date of the latest revision will always be displayed below.

**Last updated: January 2026**
