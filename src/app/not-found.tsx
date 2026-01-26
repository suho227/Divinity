'use client';

import "./globals.css";

export default function NotFound() {
    return (
        <html lang="en">
            <body className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">404</h1>
                    <p className="mt-4">Page not found</p>
                </div>
            </body>
        </html>
    );
}
