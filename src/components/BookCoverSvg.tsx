import React from 'react';
import { getBookCoverTokens, type ResolvedColorMode } from '../styles/m3e-palettes';

interface BookCoverSvgProps {
  slug: string;
  mode?: ResolvedColorMode;
  className?: string;
}

/**
 * 生成 M3 Expressive MaterialShapes 风格的波瓣圆 / 太阳轮 / Cookie 多边形路径
 * (Sunny / SoftBurst / Cookie9Sided / Clover4Leaf / Puffy 等平滑正弦圆角轮廓)
 */
function createScallopPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  lobes: number,
  phaseDeg = -90
): string {
  const steps = Math.max(72, lobes * 16);
  const phase = (phaseDeg * Math.PI) / 180;
  const midR = (outerR + innerR) / 2;
  const amp = (outerR - innerR) / 2;
  const pts: string[] = [];

  for (let i = 0; i < steps; i++) {
    const theta = (i / steps) * Math.PI * 2;
    const r = midR + amp * Math.cos(lobes * (theta - phase));
    const x = cx + r * Math.cos(theta);
    const y = cy + r * Math.sin(theta);
    pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  pts.push('Z');
  return pts.join(' ');
}

/**
 * 生成圆角正多边形路径 (RoundedPolygon: Gem / Pentagon / Triangle / Diamond)
 */
function createRoundedPolygonPath(
  cx: number,
  cy: number,
  r: number,
  sides: number,
  cornerRatio = 0.24,
  rotationDeg = -90
): string {
  const rot = (rotationDeg * Math.PI) / 180;
  const verts = Array.from({ length: sides }, (_, i) => {
    const a = rot + (i * Math.PI * 2) / sides;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });

  const parts: string[] = [];
  for (let i = 0; i < sides; i++) {
    const prev = verts[(i - 1 + sides) % sides];
    const curr = verts[i];
    const next = verts[(i + 1) % sides];

    const p1x = curr.x + (prev.x - curr.x) * cornerRatio;
    const p1y = curr.y + (prev.y - curr.y) * cornerRatio;
    const p2x = curr.x + (next.x - curr.x) * cornerRatio;
    const p2y = curr.y + (next.y - curr.y) * cornerRatio;

    parts.push(
      `${i === 0 ? 'M' : 'L'}${p1x.toFixed(2)},${p1y.toFixed(2)} Q${curr.x.toFixed(2)},${curr.y.toFixed(2)} ${p2x.toFixed(2)},${p2y.toFixed(2)}`
    );
  }
  parts.push('Z');
  return parts.join(' ');
}

/**
 * 生成 M3E Arch 拱门色块路径（上方半圆、下方圆角底边）
 */
function createArchPath(x: number, y: number, w: number, h: number, bottomR = 16): string {
  const r = w / 2;
  const br = Math.min(bottomR, r, h - r);
  return [
    `M ${x} ${y + r}`,
    `A ${r} ${r} 0 0 1 ${x + w} ${y + r}`,
    `L ${x + w} ${y + h - br}`,
    `Q ${x + w} ${y + h} ${x + w - br} ${y + h}`,
    `L ${x + br} ${y + h}`,
    `Q ${x} ${y + h} ${x} ${y + h - br}`,
    'Z'
  ].join(' ');
}

/**
 * Material 3 Expressive 抽象几何封面组件（Option A）：
 * 零描边简笔画、零具象图标、零伪档案文字，
 * 仅用 2–3 个纯填充圆角多边形（MaterialShapes）与单书专属 HCT Tonal 色阶表达哲学结构张力。
 */
export default function BookCoverSvg({
  slug,
  mode = 'light',
  className = ''
}: BookCoverSvgProps) {
  const palette = getBookCoverTokens(slug, mode);
  const bg = palette.coverBg;
  const c1 = palette.coverShapePrimary;
  const c2 = palette.coverShapeSecondary;
  const c3 = palette.coverShapeTertiary;

  return (
    <div
      className={`relative aspect-[5/7] w-full select-none overflow-hidden rounded-[16px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] ${className}`}
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      {renderCoverBySlug(slug, { bg, c1, c2, c3 })}
    </div>
  );
}

interface CoverColors {
  bg: string;
  c1: string;
  c2: string;
  c3: string;
}

function renderCoverBySlug(slug: string, { bg, c1, c2, c3 }: CoverColors) {
  switch (slug) {
    // 1. 西西弗神话：陡峭斜切岩体 + 悬停于峰顶边缘的正午 Sunny 太阳核
    case 'le-mythe-de-sisyphe':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <circle
            cx="148"
            cy="68"
            r="58"
            fill={c2}
            opacity="0.32"
            className="origin-[148px_68px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-110"
          />
          <path
            d={createScallopPath(132, 92, 42, 36, 12)}
            fill={c3}
            className="origin-[132px_92px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-translate-y-2 group-hover:rotate-12"
          />
          <path
            d="M -10 290 L -10 214 Q 68 158 176 98 Q 196 87 210 106 L 210 290 Z"
            fill={c1}
          />
        </svg>
      );

    // 2. 恶心：松垮黏滞的有机 Puffy 团块 vs 严整锋利的黑胶同心正圆（偶然与必然）
    case 'la-nausee':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path
            d={createScallopPath(82, 168, 92, 68, 5, -25)}
            fill={c2}
            opacity="0.65"
            className="origin-[82px_168px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-[-8deg] group-hover:scale-105"
          />
          <g className="origin-[122px_112px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-105">
            <circle cx="122" cy="112" r="56" fill={c1} />
            <circle cx="122" cy="112" r="22" fill={c3} />
            <circle cx="122" cy="112" r="6.5" fill={bg} />
          </g>
        </svg>
      );

    // 3. 形而上学是什么？：实心存有场域中央敞开的 Arch 负空间虚无之孔
    case 'was-ist-metaphysik':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <rect
            x="24"
            y="28"
            width="152"
            height="224"
            rx="34"
            fill={c1}
            className="origin-center transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-[1.02]"
          />
          <circle cx="100" cy="118" r="52" fill={c2} opacity="0.45" />
          <path
            d={createArchPath(64, 84, 72, 128, 18)}
            fill={bg}
            className="origin-[100px_148px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-105"
          />
        </svg>
      );

    // 4. 论道德的谱系：古老石版拱门被锋利的重估棱锥斜向劈开
    case 'zur-genealogie-der-moral':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path d={createArchPath(36, 42, 128, 204, 22)} fill={c2} opacity="0.55" />
          <path
            d={createRoundedPolygonPath(106, 132, 74, 3, 0.18, 28)}
            fill={c1}
            className="origin-[106px_132px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-6 group-hover:scale-105"
          />
          <path
            d={createRoundedPolygonPath(72, 190, 34, 4, 0.28, 45)}
            fill={c3}
            className="origin-[72px_190px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-translate-y-1.5"
          />
        </svg>
      );

    // 5. 新教伦理与资本主义精神：正交咬合的圆角钢柱铁笼与内核星火
    case 'protestantische-ethik':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <rect x="38" y="34" width="32" height="212" rx="16" fill={c1} />
          <rect x="130" y="34" width="32" height="212" rx="16" fill={c1} />
          <rect x="24" y="66" width="152" height="30" rx="15" fill={c2} opacity="0.72" />
          <rect x="24" y="184" width="152" height="30" rx="15" fill={c2} opacity="0.72" />
          <path
            d={createScallopPath(100, 140, 30, 18, 4, 45)}
            fill={c3}
            className="origin-[100px_140px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-115 group-hover:rotate-45"
          />
        </svg>
      );

    // 6. 常识：断裂的旧秩序基座上升起的地平破晓半圆
    case 'common-sense':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path
            d="M 28 156 A 72 72 0 0 1 172 156 Z"
            fill={c3}
            className="origin-[100px_156px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-translate-y-2.5 group-hover:scale-105"
          />
          <rect x="24" y="168" width="70" height="76" rx="18" fill={c1} />
          <rect
            x="106"
            y="182"
            width="70"
            height="62"
            rx="18"
            fill={c2}
            className="transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:translate-y-1.5"
          />
        </svg>
      );

    // 7. 中世纪的城市：多边形环抱城垣与向四方敞开的集市拱门
    case 'les-villes-du-moyen-age':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path
            d={createScallopPath(100, 136, 78, 70, 8, 22.5)}
            fill={c2}
            opacity="0.58"
            className="origin-[100px_136px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-[12deg]"
          />
          <path d={createRoundedPolygonPath(100, 136, 56, 6, 0.25, 0)} fill={c1} />
          <path
            d={createArchPath(78, 122, 44, 78, 12)}
            fill={c3}
            className="origin-[100px_161px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-105"
          />
        </svg>
      );

    // 8. 抄写员巴特比：森严并立的高墙屏风与一枚静默独立的留白椭圆（「我宁愿不」）
    case 'bartleby-the-scrivener':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <rect x="26" y="32" width="34" height="216" rx="17" fill={c1} />
          <rect x="70" y="32" width="34" height="216" rx="17" fill={c2} opacity="0.78" />
          <rect x="114" y="32" width="60" height="216" rx="26" fill={c1} />
          <rect
            x="129"
            y="112"
            width="30"
            height="58"
            rx="15"
            fill={c3}
            className="origin-[144px_141px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-110"
          />
        </svg>
      );

    // 9. 看得见的与看不见的：表层实圆与错位叠影（直接后果与隐匿后果）
    case 'ce-qu-on-voit':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <circle
            cx="122"
            cy="168"
            r="60"
            fill={c2}
            opacity="0.65"
            className="transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:translate-x-2.5 group-hover:translate-y-2"
          />
          <circle
            cx="78"
            cy="112"
            r="56"
            fill={c1}
            className="transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
          />
          <path d="M 88 112 A 46 46 0 0 1 128 148 A 46 46 0 0 1 88 112 Z" fill={c3} />
          <circle cx="102" cy="138" r="22" fill={c3} />
        </svg>
      );

    // 10. 政治论丛：上下对偶呼应的均衡器皿（贸易与货币潮汐平衡）
    case 'political-discourses':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path
            d="M 34 68 L 166 68 A 66 66 0 0 1 34 68 Z"
            fill={c2}
            className="origin-[100px_100px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-rotate-6"
          />
          <circle cx="100" cy="140" r="18" fill={c3} />
          <path
            d="M 34 212 A 66 66 0 0 1 166 212 Z"
            fill={c1}
            className="origin-[100px_180px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-6"
          />
        </svg>
      );

    // 11. 路易·波拿巴的雾月十八日：庄严正立的古典三角与倾侧滑稽的重影（悲剧与笑剧）
    case 'achtzehnte-brumaire':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path d={createRoundedPolygonPath(78, 128, 68, 3, 0.2, -90)} fill={c1} />
          <path
            d={createRoundedPolygonPath(128, 168, 60, 3, 0.26, -58)}
            fill={c2}
            opacity="0.82"
            className="origin-[128px_168px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-12"
          />
          <circle cx="136" cy="82" r="20" fill={c3} />
        </svg>
      );

    // 12. 地下室手记：厚重地表平板下方的幽暗地窖与尖锐躁动的意识星芒
    case 'zapiski-iz-podpolya':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <rect x="20" y="34" width="160" height="58" rx="22" fill={c2} opacity="0.7" />
          <rect x="28" y="106" width="144" height="142" rx="30" fill={c1} />
          <path
            d={createScallopPath(100, 178, 42, 20, 9, -90)}
            fill={c3}
            className="origin-[100px_178px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-[20deg] group-hover:scale-110"
          />
        </svg>
      );

    // 13. 假想的传记：散落夜色中的四叶星云与宝石切面（吉光片羽的微缩生平）
    case 'vies-imaginaires':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path
            d={createScallopPath(86, 114, 58, 34, 4, 15)}
            fill={c1}
            className="origin-[86px_114px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-12"
          />
          <path
            d={createRoundedPolygonPath(136, 188, 44, 5, 0.28, -18)}
            fill={c2}
            opacity="0.82"
            className="origin-[136px_188px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-rotate-12"
          />
          <circle cx="142" cy="76" r="18" fill={c3} />
          <circle cx="58" cy="208" r="14" fill={c3} opacity="0.85" />
        </svg>
      );

    // 14. 万里长城建造时：断续错落、永远无法合拢的圆角城垣节段（分段筑墙法）
    case 'beim-bau-der-chinesischen-mauer':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <circle cx="144" cy="78" r="34" fill={c3} opacity="0.85" />
          <rect
            x="22"
            y="84"
            width="78"
            height="32"
            rx="16"
            transform="rotate(-14 61 100)"
            fill={c2}
            className="transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-translate-x-1"
          />
          <rect
            x="92"
            y="134"
            width="86"
            height="34"
            rx="17"
            transform="rotate(-14 135 151)"
            fill={c1}
          />
          <rect
            x="28"
            y="188"
            width="84"
            height="34"
            rx="17"
            transform="rotate(-14 70 205)"
            fill={c1}
            className="transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:translate-x-1.5"
          />
        </svg>
      );

    // 15. 存在主义是一种人道主义：敞开的无预设虚空底座与向自身之外斜跃投射的筹划棱体
    case 'existentialisme-est-un-humanisme':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <rect x="26" y="168" width="148" height="82" rx="28" fill={c2} opacity="0.58" />
          <circle cx="84" cy="209" r="24" fill={bg} />
          <path
            d={createRoundedPolygonPath(106, 128, 72, 4, 0.22, -32)}
            fill={c1}
            className="origin-[106px_128px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-translate-y-2 group-hover:translate-x-1.5"
          />
          <circle
            cx="148"
            cy="64"
            r="19"
            fill={c3}
            className="origin-[148px_64px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-110"
          />
        </svg>
      );

    // 16. 伊利亚特，或力量之诗：往复摆荡倾压的重力巨楔与重压之下遥相对望的双圆
    case 'l-iliade-ou-le-poeme-de-la-force':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path
            d={createRoundedPolygonPath(118, 108, 70, 3, 0.22, 76)}
            fill={c2}
            opacity="0.55"
            className="origin-[118px_108px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-6"
          />
          <path
            d={createRoundedPolygonPath(94, 106, 76, 3, 0.2, 90)}
            fill={c1}
            className="origin-[94px_106px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:translate-y-1.5"
          />
          <circle cx="68" cy="222" r="20" fill={c3} />
          <circle cx="132" cy="222" r="20" fill={c3} opacity="0.78" />
        </svg>
      );

    // 17. 数理哲学导论：等势类的同构嵌套多边形与皮亚诺后继递推序列圆点
    case 'introduction-to-mathematical-philosophy':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path
            d={createRoundedPolygonPath(84, 152, 68, 6, 0.24, 0)}
            fill={c2}
            opacity="0.62"
            className="origin-[84px_152px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-rotate-6"
          />
          <path
            d={createRoundedPolygonPath(116, 126, 64, 6, 0.24, 0)}
            fill={c1}
            className="origin-[116px_126px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-6"
          />
          <circle cx="54" cy="224" r="11" fill={c3} opacity="0.72" />
          <circle cx="94" cy="224" r="14" fill={c3} opacity="0.86" />
          <circle cx="142" cy="224" r="18" fill={c3} />
        </svg>
      );

    // 18. 科学与假设：庞加莱双曲圆盘模型与正交切割圆周的非欧测地弧面
    case 'la-science-et-l-hypothese':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <circle
            cx="100"
            cy="144"
            r="78"
            fill={c1}
            className="origin-[100px_144px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-[1.03]"
          />
          <circle cx="164" cy="96" r="56" fill={bg} />
          <circle cx="42" cy="196" r="46" fill={c2} opacity="0.82" />
          <circle
            cx="78"
            cy="116"
            r="17"
            fill={c3}
            className="origin-[78px_116px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-115"
          />
        </svg>
      );

    // 19. 罗生门与王朝物语四篇：平安京倾颓朱雀楼门横梁与地狱变旋卷劫火波瓣轮
    case 'rashomon-short-stories':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <path
            d={createScallopPath(112, 108, 66, 48, 9, -20)}
            fill={c3}
            className="origin-[112px_108px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-12 group-hover:scale-105"
          />
          <rect x="26" y="156" width="148" height="32" rx="16" fill={c1} />
          <rect x="42" y="176" width="34" height="78" rx="14" fill={c1} />
          <rect x="124" y="176" width="34" height="78" rx="14" fill={c2} />
        </svg>
      );

    // 20. 星际信使：晨昏线切割的凹凸月面圆盘与木星同轴四颗美第奇卫星序列
    case 'sidereus-nuncius':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <circle cx="96" cy="118" r="66" fill={c1} />
          <circle cx="132" cy="108" r="52" fill={c2} opacity="0.45" />
          <circle cx="150" cy="104" r="46" fill={bg} />
          <g className="transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:translate-x-1.5">
            <circle cx="34" cy="222" r="7.5" fill={c3} />
            <circle cx="64" cy="214" r="9" fill={c3} />
            <circle cx="104" cy="204" r="19" fill={c1} />
            <circle cx="144" cy="194" r="8.5" fill={c3} />
            <circle cx="170" cy="187" r="7" fill={c3} />
          </g>
        </svg>
      );

    // 21. 狗的对话：巴利亚多利德复活医院夜色下相对倾听的双拱剪影与悬灯圆月
    case 'el-coloquio-de-los-perros':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <circle
            cx="100"
            cy="72"
            r="24"
            fill={c3}
            className="origin-[100px_72px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-110"
          />
          <path
            d={createArchPath(28, 122, 68, 128, 18)}
            fill={c1}
            className="origin-[62px_250px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-3"
          />
          <path
            d={createArchPath(104, 138, 68, 112, 18)}
            fill={c2}
            className="origin-[138px_250px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:-rotate-3"
          />
        </svg>
      );

    // 22. 一间只属于自己的房间：布鲁姆斯伯里明亮圆拱窗、独立带锁门扉与双生圆核
    case 'a-room-of-ones-own':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <circle cx="136" cy="78" r="42" fill={c2} opacity="0.52" />
          <path
            d={createArchPath(42, 64, 108, 186, 22)}
            fill={c1}
            className="origin-[96px_157px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-[1.02]"
          />
          <circle cx="96" cy="134" r="24" fill={bg} />
          <rect x="85" y="146" width="22" height="52" rx="11" fill={bg} />
          <circle
            cx="96"
            cy="134"
            r="11"
            fill={c3}
            className="origin-[96px_134px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:scale-125"
          />
        </svg>
      );

    // 23. 有闲阶级论：层层攀比递升的金钱阶梯基座与顶端张扬的八瓣炫耀勋章
    case 'theory-of-the-leisure-class':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <rect x="26" y="214" width="148" height="36" rx="16" fill={c2} opacity="0.65" />
          <rect x="46" y="172" width="108" height="36" rx="16" fill={c1} opacity="0.82" />
          <rect x="66" y="130" width="68" height="36" rx="16" fill={c1} />
          <path
            d={createScallopPath(100, 78, 40, 29, 8, 0)}
            fill={c3}
            className="origin-[100px_78px] transition-transform duration-500 ease-[var(--md-sys-motion-spring-spatial)] group-hover:rotate-15 group-hover:scale-110"
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <rect x="0" y="0" width="200" height="280" fill={bg} />
          <circle cx="100" cy="140" r="62" fill={c1} />
          <circle cx="132" cy="102" r="28" fill={c3} />
        </svg>
      );
  }
}
