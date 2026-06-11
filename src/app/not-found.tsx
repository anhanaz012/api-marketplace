"use client";

import { Button, Layout } from "@/shared/ui";
import Link from "next/link";

const ItemNotFoundPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-medium text-base  mb-4 tracking-tight">
            404
          </h1>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl text-muted font-semibold mb-4">
            Page not found
          </h2>

          <p className="text-muted  mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or doesn't exist.
          </p>

          {/* Action Buttons */}
          <Button variant="ghost" className="w-fit mx-auto py-3 custom-shadow">
            <Link href="/">
              Back to <span className="text-base">Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ItemNotFoundPage;
