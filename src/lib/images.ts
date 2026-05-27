/**
 * Landscape and nature imagery for CarbonCredits.kz
 * Source: Unsplash (free to use, no attribution required for web)
 * TODO: Replace with official Kazakhstan photography / satellite imagery
 */

const UNS = "https://images.unsplash.com";

export const IMAGES = {
  /** Hero: vast steppe landscape at golden hour */
  heroSteppe: `${UNS}/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=85`,

  /** Aerial view: green Kazakh plains from above */
  aerialGreen: `${UNS}/photo-1540541338-ac7e5d4e3b91?auto=format&fit=crop&w=2400&q=85`,

  /** Arid/dried landscape — Aral Sea region feel */
  aralDry: `${UNS}/photo-1615751072497-5f5169febe17?auto=format&fit=crop&w=2400&q=85`,

  /** Saxaul / restoration — desert trees */
  saxaulRestoration: `${UNS}/photo-1533577116850-9cc66cad8a9b?auto=format&fit=crop&w=2400&q=85`,

  /** Tree planting — hands in soil */
  treePlanting: `${UNS}/photo-1542601906-a0ddbcdb0ad5?auto=format&fit=crop&w=2400&q=85`,

  /** Grassland restoration — lush meadow */
  grassland: `${UNS}/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=2400&q=85`,

  /** River and water restoration */
  waterRestoration: `${UNS}/photo-1530549387789-4c87c3dce3f2?auto=format&fit=crop&w=2400&q=85`,

  /** Aerial farmland — geometric parcels */
  farmlandAerial: `${UNS}/photo-1553913861-c0fdfd2300ce?auto=format&fit=crop&w=2400&q=85`,

  /** Nature lush green recovery */
  natureGreen: `${UNS}/photo-1574482620811-1aa16ffe3c90?auto=format&fit=crop&w=2400&q=85`,

  /** Dramatic sky — Kazakh sky is famous */
  dramaticSky: `${UNS}/photo-1485841119756-7db60ac52db4?auto=format&fit=crop&w=2400&q=85`,

  /** Satellite/earth from above */
  satellite: `${UNS}/photo-1519817914152-22d216bb9170?auto=format&fit=crop&w=2400&q=85`,

  /** Community/rural development */
  ruralCommunity: `${UNS}/photo-1592820407780-54c23feac8c0?auto=format&fit=crop&w=2400&q=85`,

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
