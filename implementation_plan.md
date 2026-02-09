# Implementation Plan - Redesign Footer & Category Filter

## Overview
This plan outlines the changes made to redesign the footer and enable category filtering via URL query parameters on the All Courses page.

## Changes

### 1. `src/pages/AllCourses.tsx`
- **Objective**: Allow external links (like from the footer) to pre-select a category on the All Courses page.
- **Changes**:
    - Imported `useSearchParams` and `useEffect`.
    - Initialized `selectedCategory` state from the `category` query parameter.
    - Added a `useEffect` hook to update `selectedCategory` when the query parameter changes.

### 2. `src/components/Footer.tsx`
- **Objective**: Redesign the footer to match the new requirements.
- **Changes**:
    - Removed old sections (Cities, Popular Links, Our Services).
    - Implemented a 2x2 grid layout (2 rows, 2 columns on medium+ screens).
    - **Row 1, Col 1 (Contact)**: Added address and phone number with icons.
    - **Row 1, Col 2 (Follow Us)**: Added social media icons (Twitter, Facebook, Youtube, Instagram, Linkedin).
    - **Row 2, Col 1 (Quick Menu)**: Added links to About Us, Contact Us, and Blogs.
    - **Row 2, Col 2 (Our Services)**: Added links to specific course categories with query parameters (e.g., `/all-courses?category=SAP Courses`).

## verification
- Since browser verification failed due to environment issues, manual verification is recommended.
- Ensure clicking on footer links navigates correctly and filters the All Courses page.
- Check footer layout responsiveness.
