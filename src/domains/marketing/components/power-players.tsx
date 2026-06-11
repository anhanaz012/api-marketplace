"use client";

import { players } from "@/mockdata";
import React from "react";

const PowerPlayersSection: React.FC = () => {
  return (
    <section className="w-full px-0 xs:max-xl:px-4 bg-primary-light py-20 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] max-w-2xl xs:max-md:text-2xl font-medium text-base mb-4">
            Discover What We Offer
            <span className="gradient-heading"> Top 6 Power</span> Players of
            the Week
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold"></h3>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {players.map((player) => {
            const Icon = player.icon;
            return (
              <div
                key={player.id}
                className="bg-white rounded-3xl border border-secondary px-6 py-4 flex flex-col items-center text-center transition-all duration-300"
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 text-white rounded-full ${player.bgColor} flex items-center justify-center mb-6`}
                >
                  <Icon size={34} />
                </div>

                {/* Title */}
                <h4 className="text-lg font-medium mb-4">{player.title}</h4>

                {/* Description */}
                <p className="text-sm text-base leading-relaxed">
                  {player.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="max-w-6xl mx-auto text-center space-y-4 text-gray">
          <p className="text-lg leading-relaxed">
            Discover the most-used, highest-rated, and fastest-growing APIs and
            digital actors on our platform this week. From powerful automation
            tools to AI-driven characters redefining interaction, these are the
            solutions making the biggest impact across the community.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you&apos;re building, integrating, or exploring — these top
            performers are trusted by developers and creators alike to get
            results fast.
          </p>
          <p className="text-lg leading-relaxed">
            Updated weekly based on usage stats, ratings, and community
            feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PowerPlayersSection;
