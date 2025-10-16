import { motion } from 'framer-motion';

interface PixelCharacterProps {
  size?: number;
  equipped?: {
    hat?: string;
    body?: string;
    accessory?: string;
  };
  animated?: boolean;
}

export function PixelCharacter({
  size = 160,
  equipped = {},
  animated = true,
}: PixelCharacterProps) {
  const animationProps = animated
    ? {
        animate: {
          y: [0, -4, 0],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }
    : {};

  // Eiyuden Chronicle style colors - more vibrant and detailed
  const colors = {
    // Skin tones - warmer and more saturated
    skinBase: '#ffdbac',
    skinShade: '#e8b796',
    skinDark: '#d4a574',
    skinHighlight: '#fff5e6',

    // Hair - rich brown with highlights
    hairDark: '#3d2817',
    hairMid: '#5c3d2e',
    hairBase: '#744d3a',
    hairLight: '#8f6650',
    hairHighlight: '#a87f6b',

    // Eyes - more detailed
    eyeWhite: '#ffffff',
    eyeIris: '#4a90e2',
    eyeIrisDark: '#2563eb',
    eyePupil: '#0f1419',
    eyeShine: '#e0f2fe',

    // Outfit (blue adventurer tunic) - richer colors
    outfitDarkest: '#1e3a8a',
    outfitDark: '#2563eb',
    outfitMid: '#3b82f6',
    outfitLight: '#60a5fa',
    outfitHighlight: '#93c5fd',
    outfitBright: '#bfdbfe',

    // Pants - brown leather
    pantsDarkest: '#292524',
    pantsDark: '#44403c',
    pantsMid: '#57534e',
    pantsLight: '#78716c',

    // Boots - dark leather
    bootDarkest: '#0a0a0a',
    bootDark: '#1c1917',
    bootMid: '#292524',
    bootLight: '#44403c',

    // Belt and accessories
    beltDark: '#78350f',
    beltMid: '#92400e',
    buckleGold: '#fbbf24',
    buckleShine: '#fef3c7',

    // Outline - darker for HD-2D look
    outline: '#0a0a0a',
  };

  return (
    <motion.div
      className="inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      {...(animated ? animationProps : {})}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        className="pixelated"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Shadow - soft and realistic */}
        <ellipse cx="24" cy="45" rx="8" ry="2.5" fill="#000000" opacity="0.25" />

        {/* Boots/Feet - HD-2D style with more detail */}
        <rect x="17" y="39" width="4" height="5" fill={colors.bootDarkest} />
        <rect x="27" y="39" width="4" height="5" fill={colors.bootDarkest} />
        <rect x="17" y="40" width="3" height="3" fill={colors.bootDark} />
        <rect x="27" y="40" width="3" height="3" fill={colors.bootDark} />
        <rect x="18" y="40" width="1" height="2" fill={colors.bootMid} />
        <rect x="28" y="40" width="1" height="2" fill={colors.bootMid} />

        {/* Legs - brown pants with realistic shading */}
        <rect x="18" y="30" width="3" height="9" fill={colors.pantsDarkest} />
        <rect x="27" y="30" width="3" height="9" fill={colors.pantsDarkest} />
        <rect x="19" y="31" width="2" height="7" fill={colors.pantsDark} />
        <rect x="28" y="31" width="2" height="7" fill={colors.pantsDark} />
        <rect x="20" y="32" width="1" height="5" fill={colors.pantsMid} />
        <rect x="29" y="32" width="1" height="5" fill={colors.pantsMid} />

        {/* Body/Torso - blue tunic with rich shading */}
        <rect x="18" y="22" width="12" height="9" fill={colors.outfitDarkest} />
        <rect x="19" y="22" width="10" height="8" fill={colors.outfitDark} />
        <rect x="20" y="23" width="8" height="7" fill={colors.outfitMid} />
        <rect x="21" y="24" width="6" height="5" fill={colors.outfitLight} />
        <rect x="22" y="25" width="4" height="2" fill={colors.outfitHighlight} />
        <rect x="23" y="25" width="2" height="1" fill={colors.outfitBright} />

        {/* Belt - leather with gold buckle */}
        <rect x="18" y="29" width="12" height="2" fill={colors.beltDark} />
        <rect x="19" y="29" width="10" height="1" fill={colors.beltMid} />
        <rect x="22" y="29" width="4" height="2" fill={colors.buckleGold} />
        <rect x="23" y="29" width="2" height="1" fill={colors.buckleShine} />

        {/* Arms - detailed with sleeve folds */}
        <rect x="15" y="23" width="3" height="8" fill={colors.outfitDarkest} />
        <rect x="30" y="23" width="3" height="8" fill={colors.outfitDarkest} />
        <rect x="16" y="24" width="2" height="6" fill={colors.outfitDark} />
        <rect x="31" y="24" width="2" height="6" fill={colors.outfitDark} />
        <rect x="17" y="25" width="1" height="4" fill={colors.outfitMid} />
        <rect x="31" y="25" width="1" height="4" fill={colors.outfitMid} />

        {/* Hands - detailed skin tone */}
        <rect x="15" y="31" width="3" height="3" fill={colors.skinShade} />
        <rect x="30" y="31" width="3" height="3" fill={colors.skinShade} />
        <rect x="16" y="31" width="2" height="2" fill={colors.skinBase} />
        <rect x="31" y="31" width="2" height="2" fill={colors.skinBase} />
        <rect x="17" y="31" width="1" height="1" fill={colors.skinHighlight} />
        <rect x="31" y="31" width="1" height="1" fill={colors.skinHighlight} />

        {/* Neck and collar */}
        <rect x="21" y="20" width="6" height="3" fill={colors.skinBase} />
        <rect x="22" y="20" width="4" height="1" fill={colors.skinHighlight} />
        <rect x="21" y="22" width="6" height="1" fill={colors.skinShade} />

        {/* Head - larger and more detailed */}
        <rect x="20" y="9" width="8" height="12" fill={colors.skinBase} />
        <rect x="21" y="8" width="6" height="1" fill={colors.skinBase} />
        <rect x="22" y="7" width="4" height="1" fill={colors.skinBase} />
        <rect x="21" y="20" width="6" height="1" fill={colors.skinShade} />

        {/* Head shading - more dimensional */}
        <rect x="22" y="9" width="4" height="2" fill={colors.skinHighlight} />
        <rect x="20" y="11" width="1" height="6" fill={colors.skinShade} />
        <rect x="27" y="11" width="1" height="6" fill={colors.skinShade} />
        <rect x="21" y="18" width="6" height="2" fill={colors.skinDark} />

        {/* Hair - HD-2D style with rich detail */}
        <rect x="20" y="6" width="8" height="3" fill={colors.hairDark} />
        <rect x="19" y="7" width="10" height="3" fill={colors.hairMid} />
        <rect x="21" y="5" width="6" height="1" fill={colors.hairDark} />
        <rect x="20" y="9" width="8" height="2" fill={colors.hairBase} />

        {/* Hair highlights - layered */}
        <rect x="22" y="6" width="4" height="1" fill={colors.hairLight} />
        <rect x="21" y="7" width="2" height="1" fill={colors.hairLight} />
        <rect x="25" y="7" width="2" height="1" fill={colors.hairLight} />
        <rect x="23" y="8" width="2" height="1" fill={colors.hairHighlight} />

        {/* Hair sides and back */}
        <rect x="19" y="10" width="2" height="7" fill={colors.hairDark} />
        <rect x="27" y="10" width="2" height="7" fill={colors.hairDark} />
        <rect x="20" y="11" width="1" height="5" fill={colors.hairMid} />
        <rect x="27" y="11" width="1" height="5" fill={colors.hairMid} />

        {/* Eyes - HD-2D detailed anime style */}
        <rect x="21" y="13" width="3" height="3" fill={colors.eyeWhite} />
        <rect x="24" y="13" width="3" height="3" fill={colors.eyeWhite} />

        <rect x="22" y="13" width="2" height="3" fill={colors.eyeIris} />
        <rect x="25" y="13" width="2" height="3" fill={colors.eyeIris} />

        <rect x="22" y="14" width="2" height="1" fill={colors.eyeIrisDark} />
        <rect x="25" y="14" width="2" height="1" fill={colors.eyeIrisDark} />

        <rect x="22" y="15" width="1" height="1" fill={colors.eyePupil} />
        <rect x="23" y="15" width="1" height="1" fill={colors.eyePupil} />
        <rect x="25" y="15" width="1" height="1" fill={colors.eyePupil} />
        <rect x="26" y="15" width="1" height="1" fill={colors.eyePupil} />

        {/* Eye highlights - sparkle effect */}
        <rect x="22" y="13" width="1" height="1" fill={colors.eyeShine} />
        <rect x="25" y="13" width="1" height="1" fill={colors.eyeShine} />
        <rect x="23" y="14" width="1" height="1" fill={colors.eyeWhite} opacity="0.6" />
        <rect x="26" y="14" width="1" height="1" fill={colors.eyeWhite} opacity="0.6" />

        {/* Nose - subtle */}
        <rect x="24" y="16" width="1" height="1" fill={colors.skinDark} opacity="0.3" />

        {/* Mouth - gentle smile */}
        <rect x="23" y="17" width="3" height="1" fill="#ff6b9d" opacity="0.5" />
        <rect x="22" y="17" width="1" height="1" fill="#ff6b9d" opacity="0.3" />
        <rect x="26" y="17" width="1" height="1" fill="#ff6b9d" opacity="0.3" />

        {/* Cheek blush - softer */}
        <rect x="20" y="16" width="2" height="2" fill="#ffb3c1" opacity="0.3" />
        <rect x="26" y="16" width="2" height="2" fill="#ffb3c1" opacity="0.3" />

        {/* Hat if equipped */}
        {equipped.hat && renderHat(equipped.hat)}

        {/* Accessory if equipped */}
        {equipped.accessory && renderAccessory(equipped.accessory)}

        {/* Weapon if body is scientist (show book) */}
        {equipped.body === 'body_scientist' && (
          <>
            <rect x="8" y="18" width="3" height="4" fill="#8b4513" />
            <rect x="8" y="18" width="3" height="1" fill="#d4a574" />
            <rect x="9" y="19" width="1" height="2" fill="#f5e6d3" />
          </>
        )}
      </svg>
    </motion.div>
  );
}

// Render functions for equipment - HD-2D style scaled to 48x48
function renderHat(hatId: string) {
  switch (hatId) {
    case 'hat_basic_cap':
      return (
        <g>
          <rect x="20" y="5" width="8" height="3" fill="#b91c1c" />
          <rect x="21" y="4" width="6" height="1" fill="#dc2626" />
          <rect x="21" y="5" width="6" height="2" fill="#ef4444" />
          <rect x="22" y="5" width="4" height="1" fill="#f87171" />
          <rect x="24" y="8" width="4" height="2" fill="#991b1b" />
        </g>
      );
    case 'hat_wizard':
      return (
        <g>
          {/* Wizard hat - tall and pointed */}
          <rect x="23" y="1" width="2" height="2" fill="#7c3aed" />
          <rect x="22" y="2" width="4" height="2" fill="#8b5cf6" />
          <rect x="21" y="3" width="6" height="2" fill="#8b5cf6" />
          <rect x="20" y="4" width="8" height="2" fill="#7c3aed" />
          <rect x="19" y="5" width="10" height="2" fill="#6d28d9" />
          {/* Stars - golden */}
          <rect x="22" y="3" width="4" height="1" fill="#fbbf24" />
          <rect x="21" y="4" width="2" height="1" fill="#fbbf24" />
          <rect x="25" y="4" width="2" height="1" fill="#fbbf24" />
          <rect x="23" y="5" width="2" height="1" fill="#fef3c7" />
          {/* Glow effect */}
          <rect x="22" y="2" width="4" height="1" fill="#a78bfa" opacity="0.6" />
        </g>
      );
    case 'hat_crown':
      return (
        <g>
          {/* Crown base - golden */}
          <rect x="20" y="6" width="8" height="3" fill="#d97706" />
          <rect x="21" y="6" width="6" height="2" fill="#f59e0b" />
          <rect x="22" y="7" width="4" height="1" fill="#fbbf24" />
          {/* Crown points */}
          <rect x="20" y="4" width="2" height="2" fill="#f59e0b" />
          <rect x="23" y="3" width="2" height="3" fill="#fbbf24" />
          <rect x="26" y="4" width="2" height="2" fill="#f59e0b" />
          {/* Jewels */}
          <rect x="21" y="7" width="1" height="1" fill="#ef4444" />
          <rect x="24" y="7" width="1" height="1" fill="#3b82f6" />
          <rect x="26" y="7" width="1" height="1" fill="#10b981" />
          {/* Shine */}
          <rect x="23" y="6" width="2" height="1" fill="#fef3c7" />
        </g>
      );
    default:
      return null;
  }
}

function renderAccessory(accessoryId: string) {
  switch (accessoryId) {
    case 'acc_glasses':
      return (
        <g>
          {/* Glasses frames - HD-2D detailed */}
          <rect x="20" y="14" width="4" height="3" fill="none" stroke="#1f2937" strokeWidth="0.4" />
          <rect x="24" y="14" width="4" height="3" fill="none" stroke="#1f2937" strokeWidth="0.4" />
          {/* Bridge */}
          <rect x="23" y="15" width="2" height="0.5" fill="#1f2937" />
          {/* Lens glare - HD-2D style */}
          <rect x="21" y="14" width="2" height="1" fill="#ffffff" opacity="0.5" />
          <rect x="25" y="14" width="2" height="1" fill="#ffffff" opacity="0.5" />
        </g>
      );
    case 'acc_calculator':
      return (
        <g>
          {/* Calculator - more detailed */}
          <rect x="31" y="28" width="5" height="6" fill="#1f2937" />
          <rect x="31" y="28" width="5" height="2" fill="#22c55e" />
          <rect x="32" y="30" width="1" height="1" fill="#9ca3af" />
          <rect x="34" y="30" width="1" height="1" fill="#9ca3af" />
          <rect x="32" y="32" width="1" height="1" fill="#9ca3af" />
          <rect x="34" y="32" width="1" height="1" fill="#9ca3af" />
        </g>
      );
    default:
      return null;
  }
}
