/**
 * Landscape and nature imagery for CarbonCredits.kz
 * Source: AI-generated authentic Kazakh landscapes (Higgsfield soul_location model, 2026-05-28)
 *         Remaining keys: Unsplash (free to use, no attribution required for web)
 */

const UNS = "https://images.unsplash.com";
const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD";

export const IMAGES = {
  /** Hero: Saryarka Steppe — vast golden steppe at sunrise */
  heroSteppe: `${HF}/hf_20260528_063131_39c28258-a576-48cd-886a-6cb33a924957.png`,

  /** Aerial view: Sarysu River Plain — green Kazakh plains from above */
  aerialGreen: `${HF}/hf_20260528_063139_5a037bf9-f9b2-40b5-b7e8-5d5dd51da8cf.png`,

  /** Aral Sea Ship Graveyard — dried lakebed with rusted vessels */
  aralDry: `${HF}/hf_20260528_063134_b2c4b3a9-c1e1-48a8-ab62-a1371d15cdb3.png`,

  /** Saryshaghan Saxaul Trench — saxaul forest restoration */
  saxaulRestoration: `${HF}/hf_20260528_063135_2068ddeb-5d5d-4cc7-9b95-addede6d6046.png`,

  /** Aksu Field Station — tree planting and ecological restoration */
  treePlanting: `${HF}/hf_20260528_063150_5058f5db-d08b-46f1-acdd-18c0069a6498.png`,

  /** Saryarqa Dala — lush Kazakh steppe grassland */
  grassland: `${HF}/hf_20260528_063137_014000ac-0a83-4eea-a1ce-c128da6a53f3.png`,

  /** Korgalzhyn Wetland Reserve — water and wetland restoration */
  waterRestoration: `${HF}/hf_20260528_063144_c42e5566-4ec5-4b52-8fc3-09ea44726b68.png`,

  /** Kostanay Plain — aerial view of agricultural parcels */
  farmlandAerial: `${HF}/hf_20260528_063140_430c7082-f004-4791-b1e0-e1fa33171536.png`,

  /** Nature lush green recovery */
  natureGreen: `${UNS}/photo-1574482620811-1aa16ffe3c90?auto=format&fit=crop&w=2400&q=85`,

  /** Dramatic sky — Kazakh sky is famous */
  dramaticSky: `${UNS}/photo-1485841119756-7db60ac52db4?auto=format&fit=crop&w=2400&q=85`,

  /** Aerial: Kazakh Steppe from altitude — cinematic wide landscape */
  satellite: `${HF}/hf_20260528_081856_5421b420-5eda-412d-9476-35e8c13ee28c.png`,

  /** Saryarka Steppe — community and rural landscape */
  ruralCommunity: `${HF}/hf_20260528_063142_a216bdbe-bbbb-4fed-9725-927f813f1c2b.png`,

  /** Financial/investment premium feel */
  financialPremium: `${UNS}/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2400&q=85`,

  /** Biochar / soil restoration */
  soilRestoration: `${UNS}/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2400&q=85`,

  /** Biodiversity — wildflowers, insects */
  biodiversity: `${UNS}/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2400&q=85`,

  /** Wind energy — renewable Kazakhstan */
  renewableEnergy: `${UNS}/photo-1466611653911-0072c709e90c?auto=format&fit=crop&w=2400&q=85`,
} as const;

export type ImageKey = keyof typeof IMAGES;
