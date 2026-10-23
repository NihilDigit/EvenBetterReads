import React from 'react';

interface BookCoverSvgProps {
  slug: string;
  className?: string;
}

/**
 * 统一馆藏版式 SVG 书封（5:7 经典文库本开本比例，viewBox 0 0 200 280）
 * 采用欧洲古典铜版画 / 木刻版画（Woodcut & Copperplate Engraving）具象叙事风格，
 * 考据原书初版排印规制并绘入各书最具标志性的具象符号、人物剪影、旗帜纹章与历史器物，
 * 完全基于 currentColor 与 var(--accent-nrf)，自适应棉纸、暖卷、玄夜三套主题色。
 */
export default function BookCoverSvg({ slug, className = '' }: BookCoverSvgProps) {
  return (
    <div
      className={`relative aspect-[5/7] w-full select-none overflow-hidden bg-[var(--bg-canvas)] text-[var(--ink-primary)] border border-[var(--rule-strong)] shadow-[2px_3px_0px_var(--rule-line)] group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:border-[var(--accent-nrf)] group-hover:shadow-[3.5px_4.5px_0px_var(--accent-nrf)] transition-all duration-250 ease-out ${className}`}
      aria-hidden="true"
    >
      {renderCoverBySlug(slug)}
    </div>
  );
}

function SpineAndFrame({
  vol,
  year,
  accentFrame = false
}: {
  vol: string;
  year: string;
  accentFrame?: boolean;
}) {
  return (
    <>
      {/* 左侧装订书脊压槽线与装订针脚刻度 */}
      <line
        x1="11"
        y1="0"
        x2="11"
        y2="280"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <line
        x1="13.5"
        y1="0"
        x2="13.5"
        y2="280"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="0.6"
      />

      {/* 外层实墨线框 */}
      <rect
        x="20"
        y="10"
        width="168"
        height="260"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      {/* 内层朱砂或细墨复线框（四角带古典版刻十字花饰） */}
      <rect
        x="23.5"
        y="13.5"
        width="161"
        height="253"
        fill="none"
        stroke={accentFrame ? 'var(--accent-nrf)' : 'currentColor'}
        strokeOpacity={accentFrame ? '0.85' : '0.45'}
        strokeWidth="0.75"
      />

      {/* 顶部栏：馆藏卷号与初版年份 */}
      <text
        x="30"
        y="24.5"
        fill="var(--accent-nrf)"
        fontSize="7"
        fontFamily="JetBrains Mono, monospace"
        letterSpacing="1"
      >
        {vol}
      </text>
      <text
        x="178"
        y="24.5"
        textAnchor="end"
        fill="currentColor"
        fontSize="7"
        fontFamily="JetBrains Mono, monospace"
        letterSpacing="0.8"
      >
        {year}
      </text>
      <line
        x1="28"
        y1="28.5"
        x2="180"
        y2="28.5"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.6"
      />
    </>
  );
}

function renderCoverBySlug(slug: string) {
  switch (slug) {
    case 'le-mythe-de-sisyphe':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.01" year="1942" accentFrame />

          {/* 1942 Gallimard Collection Blanche 报头排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2.2"
          >
            ALBERT CAMUS
          </text>
          <text
            x="104"
            y="60"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="13.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.6"
          >
            LE MYTHE
          </text>
          <text
            x="104"
            y="74"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="13.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.6"
          >
            DE SISYPHE
          </text>
          <text
            x="104"
            y="85"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.2"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Essai sur l’absurde
          </text>

          {/* 中心具象木刻版画：西西弗弓身抵推巨石登顶、山巅断崖、希腊回纹与正午烈日 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 阿尔及尔/地中海正午烈日与放射光芒 */}
            <circle cx="58" cy="116" r="10.5" fill="var(--accent-nrf)" />
            <g stroke="var(--accent-nrf)" strokeWidth="0.75" strokeOpacity="0.8">
              <line x1="58" y1="100" x2="58" y2="103" />
              <line x1="58" y1="129" x2="58" y2="132" />
              <line x1="42" y1="116" x2="45" y2="116" />
              <line x1="71" y1="116" x2="74" y2="116" />
              <line x1="46.5" y1="104.5" x2="49" y2="107" />
              <line x1="67" y1="125" x2="69.5" y2="127.5" />
              <line x1="69.5" y1="104.5" x2="67" y2="107" />
              <line x1="49" y1="125" x2="46.5" y2="127.5" />
            </g>

            {/* 巨石滚落山麓的永恒轮回虚线弧 */}
            <path
              d="M 142 110 C 102 104, 68 134, 44 192"
              fill="none"
              stroke="var(--accent-nrf)"
              strokeWidth="0.85"
              strokeDasharray="2.5 2"
            />
            <polygon points="43,194 44,187 49,191" fill="var(--accent-nrf)" />

            {/* 险峻山岩阶梯与岩层版画排线 */}
            <path
              d="M 32 212 L 54 198 L 72 184 L 94 166 L 118 148 L 146 126 L 164 114 L 176 114 L 176 212 Z"
              fill="currentColor"
              fillOpacity="0.08"
            />
            <path
              d="M 32 212 L 54 198 L 72 184 L 94 166 L 118 148 L 146 126 L 164 114 L 176 114"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            {/* 岩层斜向刻线 */}
            <g stroke="currentColor" strokeOpacity="0.28" strokeWidth="0.65">
              <line x1="48" y1="212" x2="96" y2="174" />
              <line x1="66" y1="212" x2="126" y2="164" />
              <line x1="84" y1="212" x2="154" y2="156" />
              <line x1="102" y1="212" x2="176" y2="152" />
              <line x1="120" y1="212" x2="176" y2="167" />
              <line x1="138" y1="212" x2="176" y2="182" />
              <line x1="156" y1="212" x2="176" y2="196" />
            </g>

            {/* 巨石（带多面体岩石刻面与阴影纹理） */}
            <circle
              cx="132"
              cy="121"
              r="18.5"
              fill="var(--bg-canvas)"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M 118 111 L 130 116 L 144 109 M 130 116 L 128 131 L 116 127 M 128 131 L 145 129"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="0.8"
            />
            <path
              d="M 122 134 L 140 134 M 125 137 L 137 137"
              stroke="currentColor"
              strokeOpacity="0.4"
              strokeWidth="0.7"
            />

            {/* 西西弗具象人物剪影（古希腊瓶画/木刻风：弓背、低首、双臂死抵巨石、前腿蹬阶、后腿绷直发力） */}
            <g fill="currentColor">
              {/* 低垂用力的头颅 */}
              <circle cx="106" cy="136" r="4.5" />
              {/* 紧绷弓起的脊背、肩胛与腰胯 */}
              <path d="M 88 153 C 92 142, 100 136, 109 139 L 118 131 L 120 134 L 109 144 C 103 146, 97 151, 94 157 Z" />
              {/* 上方支撑巨石的前臂 */}
              <path d="M 105 139 L 115 125 L 118 127 L 108 142 Z" />
              {/* 前蹬膝盖与小腿（踏在山岩台阶上） */}
              <path d="M 93 153 L 107 151 L 109 164 L 105 165 L 103 155 L 91 157 Z" />
              {/* 后方蹬地绷直的长腿 */}
              <path d="M 89 154 L 77 172 L 73 183 L 77 184 L 82 173 L 94 157 Z" />
            </g>

            {/* 底部古希腊瓶画回纹装饰带（Meander） */}
            <rect x="32" y="212" width="144" height="10" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="0.8" />
            <path
              d="M 36 219 L 36 215 L 42 215 L 42 218 L 39 218 M 46 219 L 46 215 L 52 215 L 52 218 L 49 218 M 56 219 L 56 215 L 62 215 L 62 218 L 59 218 M 66 219 L 66 215 L 72 215 L 72 218 L 69 218 M 76 219 L 76 215 L 82 215 L 82 218 L 79 218 M 86 219 L 86 215 L 92 215 L 92 218 L 89 218 M 96 219 L 96 215 L 102 215 L 102 218 L 99 218 M 106 219 L 106 215 L 112 215 L 112 218 L 109 218 M 116 219 L 116 215 L 122 215 L 122 218 L 119 218 M 126 219 L 126 215 L 132 215 L 132 218 L 129 218 M 136 219 L 136 215 L 142 215 L 142 218 L 139 218 M 146 219 L 146 215 L 152 215 L 152 218 L 149 218 M 156 219 L 156 215 L 162 215 L 162 218 L 159 218 M 166 219 L 166 215 L 172 215 L 172 218 L 169 218"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.7"
            />
          </g>

          {/* 底部 NRF 花押与出版牌记 */}
          <text
            x="104"
            y="240"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="11"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
            fontWeight="600"
            letterSpacing="1"
          >
            nrf
          </text>
          <text
            x="104"
            y="256"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2.2"
          >
            GALLIMARD · PARIS
          </text>
        </svg>
      );

    case 'zur-genealogie-der-moral':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.02" year="1887" />

          {/* 1887 C. G. Naumann Leipzig 初版扉页排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.2"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.8"
          >
            FRIEDRICH NIETZSCHE
          </text>
          <text
            x="104"
            y="60"
            textAnchor="middle"
            fill="currentColor"
            fontSize="12.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.4"
          >
            ZUR GENEALOGIE
          </text>
          <text
            x="104"
            y="74"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="12.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.8"
          >
            DER MORAL
          </text>
          <text
            x="104"
            y="85"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.2"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Eine Streitschrift
          </text>

          {/* 中心具象版画：展翅高翔的雄鹰与盘绕的蛇、哲学之锤与被闪电击碎的旧道德法版 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 上方：高贵道德与查拉图斯特拉的展翅雄鹰（Adler） */}
            <path
              d="M 104 114 L 99 107 L 95 109 L 98 114 L 74 102 L 44 108 L 58 115 L 48 119 L 66 122 L 58 126 L 86 125 L 96 131 L 91 140 L 104 136 L 117 140 L 112 131 L 122 125 L 150 126 L 142 122 L 160 119 L 150 115 L 164 108 L 134 102 L 110 114 L 113 109 L 109 107 Z"
              fill="currentColor"
            />
            {/* 鹰胸前的白日圆环 */}
            <circle cx="104" cy="122" r="4" fill="var(--bg-canvas)" />
            <circle cx="104" cy="122" r="2" fill="var(--accent-nrf)" />

            {/* 中部：盘绕的智慧之蛇与倾斜的「罪责/债务（Schuld）」天平 */}
            <path
              d="M 78 146 C 88 138, 120 152, 130 142 C 136 136, 124 131, 118 136"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="117" cy="136" r="1.5" fill="var(--accent-nrf)" />

            {/* 下方：被「哲学之锤」与朱砂雷电劈成两半的旧道德石版（GUT / BÖSE） */}
            {/* 左半碎裂石版 */}
            <path
              d="M 52 212 L 52 166 A 16 16 0 0 1 68 150 L 96 150 L 90 168 L 98 182 L 88 212 Z"
              fill="var(--bg-canvas)"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <text x="72" y="176" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="EB Garamond, serif" fontWeight="600">
              GUT
            </text>
            <text x="71" y="188" textAnchor="middle" fill="currentColor" fontSize="6.5" fontFamily="EB Garamond, serif">
              SCHLECHT
            </text>

            {/* 右半倾侧碎裂石版 */}
            <path
              d="M 108 212 L 116 184 L 108 170 L 114 152 L 140 154 A 16 16 0 0 1 154 170 L 150 212 Z"
              fill="currentColor"
              fillOpacity="0.08"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <text x="132" y="178" textAnchor="middle" fill="var(--accent-nrf)" fontSize="7" fontFamily="EB Garamond, serif" fontWeight="600">
              BÖSE
            </text>
            <text x="131" y="190" textAnchor="middle" fill="currentColor" fontSize="6.5" fontFamily="EB Garamond, serif">
              SCHULD
            </text>

            {/* 劈开两块法版的朱砂闪电与飞溅碎石 */}
            <polyline
              points="108,136 96,166 110,170 95,214"
              fill="none"
              stroke="var(--accent-nrf)"
              strokeWidth="2.2"
            />
            <polygon points="84,158 88,155 87,161" fill="var(--accent-nrf)" />
            <polygon points="119,163 124,160 122,166" fill="currentColor" />
            <polygon points="91,194 86,197 90,200" fill="currentColor" />
          </g>

          {/* 底部 1887 莱比锡初版牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2.2"
          >
            LEIPZIG · 1887
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Verlag von C. G. Naumann
          </text>
        </svg>
      );

    case 'protestantische-ethik':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.03" year="1920" />

          {/* 1920 J. C. B. Mohr (Paul Siebeck) Tübingen 原版排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="9"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            MAX WEBER
          </text>
          <text
            x="104"
            y="58"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1"
          >
            DIE PROTESTANTISCHE
          </text>
          <text
            x="104"
            y="70"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1"
          >
            ETHIK UND DER GEIST
          </text>
          <text
            x="104"
            y="82"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="8.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="1"
          >
            DES KAPITALISMUS
          </text>

          {/* 中心具象版画：清教教堂尖塔与沙漏，被关进「坚硬如钢的铁笼」、咬合齿轮与近代工厂烟囱 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />
            {/* 背景复式记账法账册栏线 */}
            <g stroke="currentColor" strokeOpacity="0.16" strokeWidth="0.6">
              <line x1="56" y1="92" x2="56" y2="222" />
              <line x1="80" y1="92" x2="80" y2="222" />
              <line x1="128" y1="92" x2="128" y2="222" />
              <line x1="152" y1="92" x2="152" y2="222" />
              <line x1="32" y1="124" x2="176" y2="124" />
              <line x1="32" y1="156" x2="176" y2="156" />
              <line x1="32" y1="188" x2="176" y2="188" />
            </g>

            {/* 后景两侧：现代工业烟囱与浓烟 vs 新教哥特礼拜堂尖顶 */}
            {/* 左侧工厂烟囱与锯齿厂房 */}
            <path
              d="M 40 212 L 40 144 L 47 144 L 49 212 Z"
              fill="currentColor"
              fillOpacity="0.75"
            />
            <path
              d="M 43 141 C 48 134, 58 136, 64 130"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              strokeDasharray="2 1.5"
            />
            {/* 右侧清教教堂尖塔与十字 */}
            <polygon points="161,126 155,162 167,162" fill="currentColor" fillOpacity="0.75" />
            <rect x="155" y="162" width="12" height="50" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.8" />
            <line x1="161" y1="117" x2="161" y2="126" stroke="currentColor" strokeWidth="1.1" />
            <line x1="157.5" y1="120.5" x2="164.5" y2="120.5" stroke="currentColor" strokeWidth="1.1" />

            {/* 中央：机械大齿轮（带 12 枚真实齿槽路径） */}
            <g transform="translate(104, 158)">
              <circle r="33" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.5" />
              <circle r="27" fill="none" stroke="var(--accent-nrf)" strokeWidth="1" strokeDasharray="3.5 2.5" />
              {/* 齿轮外齿 */}
              <g fill="currentColor">
                <rect x="-3.5" y="-38" width="7" height="6" />
                <rect x="-3.5" y="32" width="7" height="6" />
                <rect x="-38" y="-3.5" width="6" height="7" />
                <rect x="32" y="-3.5" width="6" height="7" />
                <rect x="-3.5" y="-38" width="7" height="6" transform="rotate(30)" />
                <rect x="-3.5" y="-38" width="7" height="6" transform="rotate(60)" />
                <rect x="-3.5" y="-38" width="7" height="6" transform="rotate(120)" />
                <rect x="-3.5" y="-38" width="7" height="6" transform="rotate(150)" />
                <rect x="-3.5" y="-38" width="7" height="6" transform="rotate(210)" />
                <rect x="-3.5" y="-38" width="7" height="6" transform="rotate(240)" />
                <rect x="-3.5" y="-38" width="7" height="6" transform="rotate(300)" />
                <rect x="-3.5" y="-38" width="7" height="6" transform="rotate(330)" />
              </g>
              {/* 齿轮内部的清教徒时间沙漏（“浪费时间乃万恶之首”） */}
              <polygon
                points="-12,-16 12,-16 2,0 12,16 -12,16 -2,0"
                fill="var(--bg-canvas)"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon points="-7,-11 7,-11 0,-1" fill="var(--accent-nrf)" />
              <polygon points="-9,14 9,14 0,4" fill="var(--accent-nrf)" />
              <line x1="-15" y1="-16" x2="15" y2="-16" stroke="currentColor" strokeWidth="1.6" />
              <line x1="-15" y1="16" x2="15" y2="16" stroke="currentColor" strokeWidth="1.6" />
            </g>

            {/* 前景：笼罩一切的「坚硬如钢的壳（Stahlhartes Gehäuse）」拱顶铁栅栏 */}
            <path
              d="M 60 212 L 60 132 A 44 34 0 0 1 148 132 L 148 212"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <line x1="76" y1="104" x2="76" y2="212" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.75" />
            <line x1="132" y1="104" x2="132" y2="212" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.75" />
            <line x1="54" y1="212" x2="154" y2="212" stroke="currentColor" strokeWidth="1.8" />
          </g>

          {/* 底部 J. C. B. Mohr (Paul Siebeck) 1801 经典纹章与出版地 */}
          <circle cx="104" cy="236" r="8.5" fill="none" stroke="currentColor" strokeWidth="0.9" />
          <text
            x="104"
            y="238.5"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="6"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
          >
            1801
          </text>
          <text
            x="104"
            y="255"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.8"
          >
            J. C. B. MOHR · TÜBINGEN
          </text>
        </svg>
      );

    case 'common-sense':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.04" year="1776" accentFrame />

          {/* 1776 费城初版小册扉页排印 */}
          <text
            x="104"
            y="45"
            textAnchor="middle"
            fill="currentColor"
            fontSize="13.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="1.6"
          >
            COMMON SENSE;
          </text>
          <text
            x="104"
            y="58"
            textAnchor="middle"
            fill="currentColor"
            fontSize="6.8"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.3"
          >
            ADDRESSED TO THE
          </text>
          <text
            x="104"
            y="69"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="8"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="1.1"
          >
            INHABITANTS OF AMERICA
          </text>
          <line x1="46" y1="75" x2="162" y2="75" stroke="currentColor" strokeWidth="0.8" />
          <text
            x="104"
            y="85"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.8"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            by Thomas Paine
          </text>

          {/* 中心具象版画：北美十三州海岸版图剪影、十三星殖民地旗帜 vs 折断的大英米字旗与倾覆碎裂的乔治三世王冠 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 背景中央：北美十三殖民地大西洋东海岸版图剪影（从新英格兰、长岛、切萨皮克湾至佐治亚） */}
            <path
              d="M 118 98 L 128 101 L 124 109 L 130 113 L 122 117 L 114 119 L 116 125 L 110 132 L 113 139 L 106 146 L 109 154 L 101 164 L 94 174 L 91 186 L 83 190 L 81 180 L 86 168 L 83 156 L 91 144 L 95 132 L 101 120 L 109 108 Z"
              fill="currentColor"
              fillOpacity="0.1"
              stroke="currentColor"
              strokeOpacity="0.45"
              strokeWidth="0.8"
              strokeDasharray="2 1"
            />

            {/* 左上：北美十三殖民地旗帜（Betsy Ross / Continental Flag：十三道条纹 + 十三星圆环） */}
            <g transform="translate(42, 102)">
              {/* 自由之竿（顶端饰弗里吉亚自由帽） */}
              <line x1="0" y1="0" x2="0" y2="96" stroke="currentColor" strokeWidth="1.5" />
              <path d="M -3 2 C -3 -4, 3 -5, 5 0 Z" fill="var(--accent-nrf)" />
              {/* 飘扬的十三道条纹旗面 */}
              <rect x="0" y="5" width="54" height="34" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />
              {/* 十三道红白条纹 */}
              <g stroke="var(--accent-nrf)" strokeWidth="1.8">
                <line x1="0" y1="7.5" x2="54" y2="7.5" />
                <line x1="0" y1="13" x2="54" y2="13" />
                <line x1="0" y1="18.5" x2="54" y2="18.5" />
                <line x1="0" y1="24" x2="54" y2="24" />
                <line x1="0" y1="29.5" x2="54" y2="29.5" />
                <line x1="0" y1="35" x2="54" y2="35" />
              </g>
              {/* 左上角深色星区与十三星圆环 */}
              <rect x="0" y="5" width="24" height="19" fill="currentColor" />
              <circle
                cx="12"
                cy="14.5"
                r="6"
                fill="none"
                stroke="var(--bg-canvas)"
                strokeWidth="1.4"
                strokeDasharray="1.2 1.7"
              />
            </g>

            {/* 右上：大英帝国米字旗（1707 Union Flag：圣乔治十字 + 圣安德鲁斜十字，旗杆折断下垂） */}
            <g transform="translate(116, 114) rotate(14)">
              {/* 折断的英国王室旗杆 */}
              <line x1="0" y1="-8" x2="0" y2="44" stroke="currentColor" strokeWidth="1.3" />
              <line x1="0" y1="44" x2="-8" y2="62" stroke="currentColor" strokeWidth="1.3" />
              {/* 米字旗面 */}
              <rect x="0" y="0" width="48" height="30" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />
              {/* 圣安德鲁对角斜十字 */}
              <line x1="0" y1="0" x2="48" y2="30" stroke="currentColor" strokeWidth="2.2" />
              <line x1="48" y1="0" x2="0" y2="30" stroke="currentColor" strokeWidth="2.2" />
              {/* 圣乔治白边正十字 */}
              <line x1="24" y1="0" x2="24" y2="30" stroke="var(--bg-canvas)" strokeWidth="5" />
              <line x1="0" y1="15" x2="48" y2="15" stroke="var(--bg-canvas)" strokeWidth="5" />
              <line x1="24" y1="0" x2="24" y2="30" stroke="var(--accent-nrf)" strokeWidth="2.6" />
              <line x1="0" y1="15" x2="48" y2="15" stroke="var(--accent-nrf)" strokeWidth="2.6" />
            </g>

            {/* 下方中央：被《法律之剑》劈翻倒地的英国王冠（圣爱德华王冠，带十字与百合花饰） */}
            <g transform="translate(108, 192) rotate(158)">
              {/* 王冠底座貂皮镶边与宝石带 */}
              <rect x="-26" y="8" width="52" height="6" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="-16" cy="11" r="1.2" fill="var(--accent-nrf)" />
              <circle cx="0" cy="11" r="1.5" fill="var(--accent-nrf)" />
              <circle cx="16" cy="11" r="1.2" fill="var(--accent-nrf)" />
              {/* 王冠双拱与尖顶十字 */}
              <path
                d="M -26 8 C -26 -8, -4 -10, 0 -2 C 4 -10, 26 -8, 26 8 Z"
                fill="currentColor"
                fillOpacity="0.14"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon points="-26,8 -22,-6 -12,4 0,-10 12,4 22,-6 26,8" fill="none" stroke="currentColor" strokeWidth="1.1" />
              {/* 冠顶宝球与十字架 */}
              <circle cx="0" cy="-13" r="2.5" fill="var(--accent-nrf)" />
              <line x1="0" y1="-15.5" x2="0" y2="-21" stroke="currentColor" strokeWidth="1.2" />
              <line x1="-3" y1="-18.5" x2="3" y2="-18.5" stroke="currentColor" strokeWidth="1.2" />
            </g>

            {/* 斩断王冠的朱砂剑锋与「LAW IS KING」铭带 */}
            <line x1="66" y1="208" x2="148" y2="168" stroke="var(--accent-nrf)" strokeWidth="1.8" />
            <rect x="46" y="198" width="54" height="14" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="0.9" />
            <text
              x="73"
              y="207.5"
              textAnchor="middle"
              fill="var(--accent-nrf)"
              fontSize="6.8"
              fontFamily="EB Garamond, Georgia, serif"
              fontWeight="600"
              letterSpacing="0.8"
            >
              LAW IS KING
            </text>
          </g>

          {/* 底部 1776 费城初版牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            PHILADELPHIA · 1776
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Printed &amp; Sold by R. Bell, Third-Street
          </text>
        </svg>
      );

    case 'les-villes-du-moyen-age':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.05" year="1927" />

          {/* 1927 Maurice Lamertin Bruxelles 初版排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.8"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            HENRI PIRENNE
          </text>
          <text
            x="104"
            y="60"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="12.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.8"
          >
            LES VILLES
          </text>
          <text
            x="104"
            y="74"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="12.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.8"
          >
            DU MOYEN ÂGE
          </text>
          <text
            x="104"
            y="85"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Essai d’histoire économique et sociale
          </text>

          {/* 中心具象木刻版画：中世纪设防自治城市全景（布鲁日钟楼、哥特尖塔、城墙塔楼）与地中海单桅帆船、新月与十字 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 左上角加洛林十字 vs 右上角伊斯兰新月（皮朗命题：地中海东西裂变） */}
            <g stroke="currentColor" strokeWidth="1.1">
              <line x1="46" y1="100" x2="46" y2="112" />
              <line x1="40" y1="106" x2="52" y2="106" />
            </g>
            <path
              d="M 160 100 A 6.5 6.5 0 1 0 166 111 A 5 5 0 1 1 160 100 Z"
              fill="var(--accent-nrf)"
            />

            {/* 上半部：中世纪商业自治城市天际线（钟楼 Beffroi + 主教座堂 + 阶梯山墙行会馆 + 雉堞城垣） */}
            {/* 中央市政高耸钟楼（挂自治旗帜） */}
            <line x1="104" y1="96" x2="104" y2="105" stroke="currentColor" strokeWidth="1" />
            <polygon points="104,96 113,99 104,102" fill="var(--accent-nrf)" />
            <polygon points="104,104 96,120 112,120" fill="currentColor" />
            <rect x="97" y="120" width="14" height="36" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.1" />
            <rect x="101" y="125" width="2.5" height="7" fill="currentColor" />
            <rect x="105" y="125" width="2.5" height="7" fill="currentColor" />
            <circle cx="104" cy="138" r="3.5" fill="none" stroke="var(--accent-nrf)" strokeWidth="0.9" />

            {/* 左侧哥特教堂双尖塔与佛兰德阶梯山墙屋顶 */}
            <polygon points="75,112 70,128 80,128" fill="currentColor" fillOpacity="0.8" />
            <rect x="70" y="128" width="10" height="28" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />
            <polygon points="88,122 80,134 96,134" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />
            <rect x="81" y="134" width="15" height="22" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />

            {/* 右侧城堡圆塔与商业外城行会建筑 */}
            <polygon points="122,124 112,135 132,135" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />
            <rect x="113" y="135" width="18" height="21" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />
            <polygon points="138,114 132,127 144,127" fill="currentColor" fillOpacity="0.8" />
            <rect x="133" y="127" width="10" height="29" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />

            {/* 横贯全城的护城石墙、城垛（Crenellations）与拱门 */}
            <path
              d="M 44 166 L 44 148 L 49 148 L 49 152 L 54 152 L 54 148 L 59 148 L 59 152 L 64 152 L 64 148 L 70 148 L 70 152 L 138 152 L 138 148 L 144 148 L 144 152 L 149 152 L 149 148 L 154 148 L 154 152 L 159 152 L 159 148 L 164 148 L 164 166 Z"
              fill="var(--bg-canvas)"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            {/* 中央城市拱门与吊闸 */}
            <path d="M 98 166 L 98 155 A 6 6 0 0 1 110 155 L 110 166 Z" fill="currentColor" />

            {/* 下半部：地中海与内河贸易柯克帆船（Merchant Cog）破浪前行 */}
            {/* 鼓起的横帆（饰十字商团纹章） */}
            <path
              d="M 94 171 C 106 169, 114 176, 115 188 L 91 188 C 90 178, 92 173, 94 171 Z"
              fill="var(--bg-canvas)"
              stroke="currentColor"
              strokeWidth="1.1"
            />
            <line x1="103" y1="168" x2="103" y2="196" stroke="currentColor" strokeWidth="1.2" />
            <line x1="99" y1="179" x2="107" y2="179" stroke="var(--accent-nrf)" strokeWidth="1.3" />
            <line x1="103" y1="175" x2="103" y2="183" stroke="var(--accent-nrf)" strokeWidth="1.3" />
            {/* 高耸船首楼与船尾楼的木质船体 */}
            <path
              d="M 80 189 L 86 199 L 120 199 L 127 187 L 120 192 L 87 192 Z"
              fill="currentColor"
            />

            {/* 雕版海浪波涛纹 */}
            <path
              d="M 38 202 Q 48 197, 58 202 T 78 202 T 98 202 T 118 202 T 138 202 T 158 202 T 170 202"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
            />
            <path
              d="M 44 209 Q 54 204, 64 209 T 84 209 T 104 209 T 124 209 T 144 209 T 164 209"
              fill="none"
              stroke="var(--accent-nrf)"
              strokeWidth="0.9"
            />
          </g>

          {/* 底部 1927 布鲁塞尔初版牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            BRUXELLES · 1927
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Maurice Lamertin, Éditeur
          </text>
        </svg>
      );

    case 'bartleby-the-scrivener':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.06" year="1853" accentFrame />

          {/* 1853 Putnam's Monthly 排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.8"
          >
            HERMAN MELVILLE
          </text>
          <text
            x="104"
            y="60"
            textAnchor="middle"
            fill="currentColor"
            fontSize="13.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="1.2"
          >
            BARTLEBY,
          </text>
          <text
            x="104"
            y="73"
            textAnchor="middle"
            fill="currentColor"
            fontSize="10"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1"
          >
            THE SCRIVENER.
          </text>
          <text
            x="104"
            y="84"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="7.2"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            A Story of Wall-Street
          </text>

          {/* 中心具象版画：密不透风的华尔街砖墙、面壁伫立的巴托比剪影、三折屏风、鹅毛笔高脚抄写台与红丝带契据 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 左后景：距窗仅三英尺的华尔街高耸盲砖墙（Dead Brick Wall，交错砖缝刻画） */}
            <rect
              x="40"
              y="98"
              width="66"
              height="94"
              fill="currentColor"
              fillOpacity="0.07"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <g stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.6">
              <line x1="40" y1="110" x2="106" y2="110" />
              <line x1="40" y1="122" x2="106" y2="122" />
              <line x1="40" y1="134" x2="106" y2="134" />
              <line x1="40" y1="146" x2="106" y2="146" />
              <line x1="40" y1="158" x2="106" y2="158" />
              <line x1="40" y1="170" x2="106" y2="170" />
              <line x1="40" y1="182" x2="106" y2="182" />
              {/* 交错竖砖缝 */}
              <line x1="56" y1="98" x2="56" y2="110" />
              <line x1="82" y1="98" x2="82" y2="110" />
              <line x1="68" y1="110" x2="68" y2="122" />
              <line x1="94" y1="110" x2="94" y2="122" />
              <line x1="56" y1="122" x2="56" y2="134" />
              <line x1="82" y1="122" x2="82" y2="134" />
              <line x1="68" y1="134" x2="68" y2="146" />
              <line x1="56" y1="146" x2="56" y2="158" />
              <line x1="68" y1="158" x2="68" y2="170" />
            </g>
            {/* 事务所高窗十字窗框 */}
            <line x1="73" y1="98" x2="73" y2="192" stroke="currentColor" strokeWidth="1.5" />
            <line x1="40" y1="145" x2="106" y2="145" stroke="currentColor" strokeWidth="1.5" />

            {/* 窗前：巴托比孤独清癯的站立背影剪影（面壁陷入「死墙遐思」） */}
            <g fill="currentColor">
              <circle cx="84" cy="133" r="5" />
              <path d="M 76 142 C 76 139, 92 139, 92 142 L 94 176 L 90 198 L 85 198 L 84 176 L 83 198 L 78 198 L 74 176 Z" />
            </g>

            {/* 右侧前景：老律师的三折屏风与高脚抄写桌、鹅毛笔、捆着红丝带的法律卷宗 */}
            <polygon
              points="102,196 102,118 118,110 118,188"
              fill="var(--bg-canvas)"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <polygon
              points="118,188 118,110 134,118 134,196"
              fill="var(--bg-elevated)"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            {/* 倾斜桌面的高脚抄写台与鹅毛笔 */}
            <polygon
              points="126,162 164,154 164,198 126,198"
              fill="var(--bg-canvas)"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            {/* 鹅毛笔（Quill） */}
            <path
              d="M 146 154 C 150 136, 160 124, 168 120 C 166 132, 158 144, 146 154 Z"
              fill="var(--accent-nrf)"
            />
            <line x1="144" y1="157" x2="168" y2="120" stroke="currentColor" strokeWidth="0.9" />
            {/* 桌面下捆着红丝带（Red Tape）的契据卷轴 */}
            <rect x="134" y="174" width="22" height="7" rx="2" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="0.9" />
            <line x1="145" y1="173" x2="145" y2="182" stroke="var(--accent-nrf)" strokeWidth="2" />

            {/* 底部銘文 */}
            <text
              x="104"
              y="213"
              textAnchor="middle"
              fill="var(--accent-nrf)"
              fontSize="7.2"
              fontFamily="EB Garamond, Georgia, serif"
              fontStyle="italic"
              letterSpacing="0.5"
            >
              “I would prefer not to.”
            </text>
          </g>

          {/* 底部 1853 纽约初刊牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            NEW YORK · 1853
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Putnam’s Monthly Magazine
          </text>
        </svg>
      );

    case 'ce-qu-on-voit':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.07" year="1850" />

          {/* 1850 Guillaumin Paris 初版小册排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.8"
          >
            FRÉDÉRIC BASTIAT
          </text>
          <text
            x="104"
            y="59"
            textAnchor="middle"
            fill="currentColor"
            fontSize="11.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.5"
          >
            CE QU’ON VOIT
          </text>
          <text
            x="104"
            y="69.5"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.2"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            et
          </text>
          <text
            x="104"
            y="81.5"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="10"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.4"
          >
            CE QU’ON NE VOIT PAS
          </text>

          {/* 中心具象版画：左半「看得见的（被石头砸碎的玻璃窗与六法郎硬币）」vs 右半「看不见的（远见之眼、铁匠被剥夺的新皮靴与书籍）」 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 顶部跨越两栏的「经济学远见之眼（La Prévoyance）」与放射光线 */}
            <path
              d="M 82 110 Q 104 98, 126 110 Q 104 122, 82 110 Z"
              fill="var(--bg-canvas)"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle cx="104" cy="110" r="4.5" fill="var(--accent-nrf)" />
            <circle cx="104" cy="110" r="1.8" fill="var(--bg-canvas)" />

            {/* 中轴分界线 */}
            <line x1="104" y1="122" x2="104" y2="214" stroke="var(--accent-nrf)" strokeWidth="1.1" />

            {/* 左半栏（看得见的）：被顽童石块砸穿的巴黎橱窗、裂纹与飞溅玻璃碎片 */}
            <rect x="42" y="128" width="52" height="66" fill="none" stroke="currentColor" strokeWidth="1.3" />
            {/* 击穿孔与放射裂纹 */}
            <polygon points="64,154 70,150 73,157 67,162" fill="currentColor" />
            <line x1="68" y1="156" x2="42" y2="132" stroke="currentColor" strokeWidth="1" />
            <line x1="68" y1="156" x2="42" y2="168" stroke="currentColor" strokeWidth="0.9" />
            <line x1="68" y1="156" x2="54" y2="194" stroke="currentColor" strokeWidth="0.9" />
            <line x1="68" y1="156" x2="94" y2="138" stroke="currentColor" strokeWidth="0.9" />
            <line x1="68" y1="156" x2="94" y2="178" stroke="currentColor" strokeWidth="0.9" />
            <polyline points="54,143 60,164 79,163 77,147 54,143" fill="none" stroke="currentColor" strokeWidth="0.7" />
            <text x="68" y="207" textAnchor="middle" fill="currentColor" fontSize="6.5" fontFamily="EB Garamond, serif">
              VISIBLE · 6 Fr.
            </text>

            {/* 右半栏（看不见的）：第三角色鞋匠的皮靴（Boot）与博须埃《世界通史论》书册 */}
            <rect
              x="114"
              y="128"
              width="52"
              height="66"
              fill="none"
              stroke="var(--accent-nrf)"
              strokeWidth="1.1"
              strokeDasharray="3 2"
            />
            {/* 具象皮靴剪影（The Unseen Shoemaker's Boot） */}
            <path
              d="M 128 138 L 141 138 L 140 162 C 146 164, 155 166, 156 172 L 156 176 L 125 176 L 125 170 L 128 168 Z"
              fill="var(--bg-canvas)"
              stroke="var(--accent-nrf)"
              strokeWidth="1.3"
            />
            {/* 靴底与靴跟刻线 */}
            <rect x="125" y="176" width="9" height="3.5" fill="var(--accent-nrf)" />
            <line x1="128" y1="145" x2="134" y2="145" stroke="var(--accent-nrf)" strokeWidth="0.9" />
            <line x1="128" y1="150" x2="134" y2="150" stroke="var(--accent-nrf)" strokeWidth="0.9" />
            <line x1="128" y1="155" x2="134" y2="155" stroke="var(--accent-nrf)" strokeWidth="0.9" />
            <text x="140" y="207" textAnchor="middle" fill="var(--accent-nrf)" fontSize="6.5" fontFamily="EB Garamond, serif">
              INVISIBLE
            </text>
          </g>

          {/* 底部 1850 巴黎初版牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            PARIS · GUILLAUMIN
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            L’Économie politique en une leçon · 1850
          </text>
        </svg>
      );

    case 'political-discourses':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.08" year="1752" accentFrame />

          {/* 1752 爱丁堡 Kincaid & Donaldson 初版扉页排印 */}
          <text
            x="104"
            y="45"
            textAnchor="middle"
            fill="currentColor"
            fontSize="11.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="1.6"
          >
            POLITICAL
          </text>
          <text
            x="104"
            y="59"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="11.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="1.6"
          >
            DISCOURSES.
          </text>
          <line x1="52" y1="65" x2="156" y2="65" stroke="currentColor" strokeWidth="0.7" />
          <text
            x="104"
            y="75"
            textAnchor="middle"
            fill="currentColor"
            fontSize="6.8"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.2"
          >
            BY
          </text>
          <text
            x="104"
            y="85"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.8"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.5"
          >
            DAVID HUME Esq;
          </text>

          {/* 中心具象版画：十八世纪远洋高桅商船、墨丘利双蛇双翼商业神杖（Caduceus）、工商业齿轮铁砧与跨海流转的金币 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 左上：贸易之神墨丘利双翼双蛇权杖（Caduceus of Commerce） */}
            <g transform="translate(56, 134)">
              <line x1="0" y1="-26" x2="0" y2="28" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="0" cy="-28" r="2.5" fill="var(--accent-nrf)" />
              {/* 顶部双翼 */}
              <path d="M 0 -22 C -8 -28, -16 -24, -14 -16 C -8 -17, -4 -19, 0 -18 Z" fill="currentColor" />
              <path d="M 0 -22 C 8 -28, 16 -24, 14 -16 C 8 -17, 4 -19, 0 -18 Z" fill="currentColor" />
              {/* 交错盘绕的双蛇 */}
              <path
                d="M -6 -12 C 6 -6, -6 2, 6 8 C -6 14, 4 20, 0 24"
                fill="none"
                stroke="var(--accent-nrf)"
                strokeWidth="1.2"
              />
              <path
                d="M 6 -12 C -6 -6, 6 2, -6 8 C 6 14, -4 20, 0 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
              />
            </g>

            {/* 右侧主体：十八世纪大英远洋三桅商船（Tall-masted British Merchantman） */}
            <g transform="translate(122, 148)">
              {/* 主桅与前后桅杆 */}
              <line x1="0" y1="-44" x2="0" y2="18" stroke="currentColor" strokeWidth="1.3" />
              <line x1="-20" y1="-32" x2="-20" y2="18" stroke="currentColor" strokeWidth="1.1" />
              <line x1="18" y1="-28" x2="18" y2="18" stroke="currentColor" strokeWidth="1" />
              {/* 桅顶迎风飘扬的赤色商船三角旗 */}
              <polygon points="0,-44 -12,-41 0,-38" fill="var(--accent-nrf)" />
              {/* 鼓满海风的多层横帆与三角首帆 */}
              <path d="M -11 -36 C -2 -34, 8 -34, 11 -36 L 9 -20 C 2 -18, -4 -18, -9 -20 Z" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />
              <path d="M -13 -17 C -2 -14, 8 -14, 13 -17 L 11 2 C 2 5, -4 5, -11 2 Z" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.1" />
              <path d="M -27 -24 C -20 -22, -14 -22, -13 -24 L -14 -4 L -26 -4 Z" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="0.9" />
              <polygon points="18,-24 32,4 18,4" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="0.9" />
              {/* 船体与舷窗 */}
              <path d="M -32 8 L -24 21 L 22 21 L 31 6 L 20 11 L -22 11 Z" fill="currentColor" />
              <line x1="-18" y1="15" x2="16" y2="15" stroke="var(--bg-canvas)" strokeWidth="1.2" strokeDasharray="2 3" />
            </g>

            {/* 下方：休谟「货币如水自动找平」海洋波涛与流转的几尼金币（Specie-Flow Mechanism） */}
            <path
              d="M 38 176 Q 52 170, 66 176 T 94 176 T 122 176 T 150 176 T 170 176"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M 38 184 Q 52 178, 66 184 T 94 184 T 122 184 T 150 184 T 170 184"
              fill="none"
              stroke="var(--accent-nrf)"
              strokeWidth="1"
            />
            {/* 海平面下互通流转的金币序列 */}
            <g transform="translate(0, 200)">
              <circle cx="56" cy="0" r="6.5" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.1" />
              <text x="56" y="2.5" textAnchor="middle" fill="currentColor" fontSize="6.5" fontFamily="EB Garamond, serif">£</text>
              <line x1="65" y1="0" x2="93" y2="0" stroke="var(--accent-nrf)" strokeWidth="1.1" strokeDasharray="2 2" />
              <circle cx="104" cy="0" r="6.5" fill="var(--bg-canvas)" stroke="var(--accent-nrf)" strokeWidth="1.2" />
              <text x="104" y="2.5" textAnchor="middle" fill="var(--accent-nrf)" fontSize="6.5" fontFamily="EB Garamond, serif">£</text>
              <line x1="115" y1="0" x2="143" y2="0" stroke="var(--accent-nrf)" strokeWidth="1.1" strokeDasharray="2 2" />
              <circle cx="152" cy="0" r="6.5" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.1" />
              <text x="152" y="2.5" textAnchor="middle" fill="currentColor" fontSize="6.5" fontFamily="EB Garamond, serif">£</text>
            </g>
          </g>

          {/* 底部 1752 爱丁堡初版牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            EDINBURGH · M.DCC.LII.
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Printed by R. Fleming for A. Kincaid
          </text>
        </svg>
      );

    case 'zapiski-iz-podpolya':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.10" year="1864" accentFrame />

          {/* 1864 彼得堡《时代（Эпоха）》杂志初刊排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.2"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.6"
          >
            Ф. М. ДОСТОЕВСКИЙ
          </text>
          <text
            x="104"
            y="60"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="12"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.8"
          >
            ЗАПИСКИ
          </text>
          <text
            x="104"
            y="74"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="11.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.8"
          >
            ИЗ ПОДПОЛЬЯ
          </text>
          <text
            x="104"
            y="85"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.2"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Часть I · Подполье
          </text>

          {/* 中心具象木刻版画：地上 1851 伦敦水晶宫铁架玻璃穹顶与 2×2=4 vs 地下室拱券里伏案疾书的地下室人、烛火、老鼠与钢琴琴键 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 上半层（地上世界）：伦敦水晶宫（Crystal Palace）三层铸铁玻璃拱廊与旗帜 */}
            <path
              d="M 68 148 L 68 122 A 36 24 0 0 1 140 122 L 140 148"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <rect x="46" y="130" width="116" height="18" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* 水晶宫桁架斜格 */}
            <g stroke="currentColor" strokeOpacity="0.38" strokeWidth="0.6">
              <line x1="86" y1="101" x2="86" y2="148" />
              <line x1="104" y1="98" x2="104" y2="148" />
              <line x1="122" y1="101" x2="122" y2="148" />
              <line x1="68" y1="122" x2="140" y2="122" />
            </g>
            {/* 水晶宫内被朱砂斜线划破的「2 × 2 = 4」自然法则 */}
            <rect x="82" y="111" width="44" height="13" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="0.8" />
            <text
              x="104"
              y="120"
              textAnchor="middle"
              fill="currentColor"
              fontSize="7.5"
              fontFamily="JetBrains Mono, monospace"
            >
              2×2=4
            </text>
            <line x1="80" y1="125" x2="128" y2="110" stroke="var(--accent-nrf)" strokeWidth="1.6" />

            {/* 地表与地下室的隔绝石地板 + 机械论「钢琴琴键（клавиш фортепиано）」 */}
            <rect x="32" y="148" width="144" height="11" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.1" />
            <g stroke="currentColor" strokeWidth="0.7">
              <line x1="48" y1="148" x2="48" y2="159" />
              <line x1="64" y1="148" x2="64" y2="159" />
              <line x1="80" y1="148" x2="80" y2="159" />
              <line x1="96" y1="148" x2="96" y2="159" />
              <line x1="112" y1="148" x2="112" y2="159" />
              <line x1="128" y1="148" x2="128" y2="159" />
              <line x1="144" y1="148" x2="144" y2="159" />
              <line x1="160" y1="148" x2="160" y2="159" />
            </g>
            <g fill="currentColor">
              <rect x="44.5" y="148" width="7" height="6.5" />
              <rect x="60.5" y="148" width="7" height="6.5" />
              <rect x="92.5" y="148" width="7" height="6.5" fill="var(--accent-nrf)" />
              <rect x="108.5" y="148" width="7" height="6.5" />
              <rect x="124.5" y="148" width="7" height="6.5" />
              <rect x="156.5" y="148" width="7" height="6.5" />
            </g>

            {/* 下半层（地下室 Подполье）：阴暗砖石拱券、佝偻伏案的地下室人剪影、摇曳烛火与墙角耗子 */}
            <rect x="32" y="159" width="144" height="63" fill="currentColor" fillOpacity="0.1" />
            <path d="M 36 222 L 36 178 A 68 24 0 0 1 172 178 L 172 222" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.3" />

            {/* 地下室人佝偻伏案疾书的具象剪影 */}
            <g fill="currentColor">
              {/* 乱发头颅与紧锁眉骨 */}
              <circle cx="88" cy="184" r="5.5" />
              {/* 高耸佝偻的肩背与伏案手臂 */}
              <path d="M 70 212 C 70 194, 78 184, 88 188 L 104 198 L 102 202 L 88 195 L 85 212 Z" />
              {/* 木桌与稿纸 */}
              <line x1="64" y1="204" x2="132" y2="204" stroke="currentColor" strokeWidth="1.6" />
              <line x1="72" y1="204" x2="72" y2="222" stroke="currentColor" strokeWidth="1.4" />
              <line x1="124" y1="204" x2="124" y2="222" stroke="currentColor" strokeWidth="1.4" />
            </g>

            {/* 桌上的烛台与朱砂烛焰 */}
            <rect x="114" y="195" width="3.5" height="9" fill="currentColor" />
            <path d="M 115.7 187 C 113 191, 113.5 194, 115.7 195 C 118 194, 118.5 191, 115.7 187 Z" fill="var(--accent-nrf)" />
            <circle cx="115.7" cy="191" r="7" fill="none" stroke="var(--accent-nrf)" strokeWidth="0.6" strokeDasharray="1.5 2" />

            {/* 地下室墙角高度意识化的「耗子（мышь）」剪影 */}
            <path
              d="M 148 218 C 151 214, 157 214, 160 218 L 164 218 C 167 218, 169 215, 167 213"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.9"
            />
          </g>

          {/* 底部 1864 圣彼得堡初刊牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.2"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.6"
          >
            САНКТ-ПЕТЕРБУРГ · 1864
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Журнал «Эпоха» · Ф. М. Достоевский
          </text>
        </svg>
      );

    case 'vies-imaginaires':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.11" year="1896" />

          {/* 1896 巴黎 Charpentier et Fasquelle 初版排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.8"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            MARCEL SCHWOB
          </text>
          <text
            x="104"
            y="61"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="13.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="1.2"
          >
            VIES
          </text>
          <text
            x="104"
            y="75"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="12.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.8"
          >
            IMAGINAIRES
          </text>
          <text
            x="104"
            y="85.5"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            L’Art de la Biographie
          </text>

          {/* 中心具象木刻版画：乌切洛透视多面体网格、赫罗斯特拉图斯焚毁的以弗所神庙圆柱、恩培多克勒跃入的埃特纳火山口与青铜凉鞋 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 上方中央：保罗·乌切洛（Paolo Uccello）的文艺复兴几何透视环面多面体（Mazzocchio） */}
            <g transform="translate(104, 125)">
              <circle r="21" fill="none" stroke="currentColor" strokeWidth="1.1" />
              <ellipse rx="21" ry="8" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <ellipse rx="8" ry="21" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <polygon
                points="0,-21 15,-15 21,0 15,15 0,21 -15,15 -21,0 -15,-15"
                fill="none"
                stroke="var(--accent-nrf)"
                strokeWidth="0.8"
              />
              <circle r="4" fill="var(--accent-nrf)" />
            </g>

            {/* 左侧：赫罗斯特拉图斯纵火焚毁的以弗所阿耳忒弥斯神庙爱奥尼亚石柱与烈焰 */}
            <g transform="translate(52, 148)">
              {/* 爱奥尼亚涡卷柱头 */}
              <rect x="-10" y="0" width="20" height="4" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1" />
              <circle cx="-8" cy="2" r="2.5" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="0.9" />
              <circle cx="8" cy="2" r="2.5" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="0.9" />
              {/* 凹槽石柱柱身（断裂） */}
              <rect x="-6.5" y="4" width="13" height="42" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.1" />
              <line x1="-2.5" y1="4" x2="-2.5" y2="46" stroke="currentColor" strokeWidth="0.6" />
              <line x1="2.5" y1="4" x2="2.5" y2="46" stroke="currentColor" strokeWidth="0.6" />
              <rect x="-9" y="46" width="18" height="4" fill="currentColor" />
              {/* 升腾的朱砂火焰 */}
              <path
                d="M -5 0 C -8 -10, -2 -14, 0 -22 C 3 -14, 8 -10, 5 0 Z"
                fill="var(--accent-nrf)"
              />
            </g>

            {/* 右侧与底部：恩培多克勒跃入的埃特纳火山口（Etna）、喷发的浓烟与留在火山口边缘的青铜凉鞋 */}
            <path
              d="M 82 214 L 116 172 L 138 172 L 168 214 Z"
              fill="currentColor"
              fillOpacity="0.12"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            {/* 火山口喷涌的朱砂火舌与烟柱 */}
            <path
              d="M 122 172 C 120 158, 128 154, 126 142 C 132 152, 136 160, 133 172"
              fill="var(--accent-nrf)"
            />
            {/* 火山边缘遗落的一只恩培多克勒青铜凉鞋（Sandale d'airain） */}
            <ellipse
              cx="112"
              cy="170"
              rx="6"
              ry="2.2"
              transform="rotate(-22 112 170)"
              fill="var(--bg-canvas)"
              stroke="var(--accent-nrf)"
              strokeWidth="1.2"
            />
            <line x1="38" y1="214" x2="170" y2="214" stroke="currentColor" strokeWidth="1.2" />
          </g>

          {/* 底部 1896 巴黎初版牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            PARIS · 1896
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Charpentier et Fasquelle, Éditeurs
          </text>
        </svg>
      );

    case 'beim-bau-der-chinesischen-mauer':
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.12" year="1917" accentFrame />

          {/* 1917/1931 柏林 Kiepenheuer 初版排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.8"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            FRANZ KAFKA
          </text>
          <text
            x="104"
            y="58"
            textAnchor="middle"
            fill="currentColor"
            fontSize="9.2"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="0.8"
          >
            BEIM BAU DER
          </text>
          <text
            x="104"
            y="72"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="10.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="0.6"
          >
            CHINESISCHEN MAUER
          </text>
          <text
            x="104"
            y="84"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.2"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            und andere Parabeln aus dem Nachlaß
          </text>

          {/* 中心具象木刻版画：分段筑造且中间留有巨大缺口的万里长城、通天巴别塔螺旋与永远走不出重重宫门的帝国信使 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 上方：卡夫卡《长城与巴别塔》——从长城地基上螺旋盘升的巴别通天塔与砸向城池的预言巨拳 */}
            <g transform="translate(104, 122)">
              {/* 螺旋阶梯状巴别塔 */}
              <polygon points="-22,22 22,22 18,10 -18,10" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.1" />
              <polygon points="-15,10 15,10 11,-2 -11,-2" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.1" />
              <polygon points="-9,-2 9,-2 6,-14 -6,-14" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.1" />
              {/* 塔身拱窗 */}
              <rect x="-2" y="-10" width="4" height="6" fill="var(--accent-nrf)" />
              <rect x="-6" y="2" width="3" height="6" fill="currentColor" />
              <rect x="3" y="2" width="3" height="6" fill="currentColor" />
            </g>

            {/* 中部：蜿蜒于崇山峻岭之间、采用「分段筑城法（System des Teilbaues）」而故意断开的万里长城雉堞 */}
            {/* 左段长城与敌楼 */}
            <path
              d="M 32 174 L 46 162 L 46 150 L 50 150 L 50 154 L 55 154 L 55 150 L 60 150 L 60 162 L 86 148 L 86 160 L 32 188 Z"
              fill="currentColor"
              fillOpacity="0.14"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            {/* 右段长城与敌楼（与左段之间留出悬空缺口） */}
            <path
              d="M 122 148 L 148 162 L 148 150 L 153 150 L 153 154 L 158 154 L 158 150 L 162 150 L 162 162 L 176 174 L 176 188 L 122 160 Z"
              fill="currentColor"
              fillOpacity="0.14"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            {/* 缺口处的朱砂虚线标尺（悖论性的分段缺口） */}
            <line
              x1="86"
              y1="154"
              x2="122"
              y2="154"
              stroke="var(--accent-nrf)"
              strokeWidth="1.3"
              strokeDasharray="2.5 2"
            />

            {/* 下方：《帝国的一则圣旨》与《在法的门前》——无穷嵌套的皇宫重门与胸前佩太阳徽记的信使 */}
            <g transform="translate(104, 194)">
              <rect x="-38" y="-18" width="76" height="38" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="-26" y="-12" width="52" height="32" fill="none" stroke="currentColor" strokeWidth="0.9" />
              <rect x="-15" y="-6" width="30" height="26" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <path d="M -7 20 L -7 6 A 7 7 0 0 1 7 6 L 7 20 Z" fill="var(--accent-nrf)" />
              <circle cx="0" cy="-14" r="3" fill="var(--accent-nrf)" />
            </g>
          </g>

          {/* 底部 1931 柏林初版牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            BERLIN · 1931
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Gustav Kiepenheuer Verlag
          </text>
        </svg>
      );

    case 'achtzehnte-brumaire':
    default:
      return (
        <svg viewBox="0 0 200 280" className="w-full h-full block">
          <SpineAndFrame vol="VOL.09" year="1852" />

          {/* 1852 纽约 Die Revolution / 1869 汉堡 Otto Meissner 排印 */}
          <text
            x="104"
            y="43"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8.8"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="2"
          >
            KARL MARX
          </text>
          <text
            x="104"
            y="58"
            textAnchor="middle"
            fill="currentColor"
            fontSize="9.2"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="0.6"
          >
            DER ACHTZEHNTE
          </text>
          <text
            x="104"
            y="72"
            textAnchor="middle"
            fill="var(--accent-nrf)"
            fontSize="13"
            fontFamily="EB Garamond, Georgia, serif"
            fontWeight="600"
            letterSpacing="1"
          >
            BRUMAIRE
          </text>
          <text
            x="104"
            y="84"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            des Louis Bonaparte
          </text>

          {/* 中心具象木刻版画：旺多姆圆柱、拿破仑双角帽与皇鹰、两侧「第一次是悲剧 / 第二次是笑剧」古典戏剧双面具与交叉刺刀 */}
          <g>
            <rect
              x="32"
              y="92"
              width="144"
              height="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />

            {/* 柱顶：倾侧欲坠的拿破仑经典双角帽（Bicorne Hat）与法兰西帝国鹰徽 */}
            <g transform="translate(104, 114) rotate(-12)">
              <path
                d="M -20 6 C -16 -8, 16 -8, 20 6 L 24 8 L -24 8 Z"
                fill="currentColor"
              />
              {/* 帽徽三色圆章 */}
              <circle cx="8" cy="1" r="3" fill="var(--bg-canvas)" />
              <circle cx="8" cy="1" r="1.5" fill="var(--accent-nrf)" />
            </g>

            {/* 斩断柱顶铜像的朱砂闪电裂痕（呼应全书末句：拿破仑铜像必将从旺多姆圆柱顶端轰然坠落） */}
            <line x1="74" y1="134" x2="136" y2="112" stroke="var(--accent-nrf)" strokeWidth="1.6" />

            {/* 中央：巴黎旺多姆青铜圆柱（螺旋浮雕带与台座） */}
            <line x1="88" y1="126" x2="120" y2="126" stroke="currentColor" strokeWidth="1.5" />
            <rect x="94" y="126" width="20" height="72" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.2" />
            <line x1="94" y1="138" x2="114" y2="145" stroke="currentColor" strokeWidth="0.85" />
            <line x1="94" y1="150" x2="114" y2="157" stroke="currentColor" strokeWidth="0.85" />
            <line x1="94" y1="162" x2="114" y2="169" stroke="currentColor" strokeWidth="0.85" />
            <line x1="94" y1="174" x2="114" y2="181" stroke="currentColor" strokeWidth="0.85" />
            <line x1="94" y1="186" x2="114" y2="193" stroke="currentColor" strokeWidth="0.85" />
            <rect x="82" y="198" width="44" height="12" fill="var(--bg-canvas)" stroke="currentColor" strokeWidth="1.2" />

            {/* 左侧：1799 悲剧面具（Tragedy Mask） */}
            <g transform="translate(58, 152)">
              <path
                d="M -13 -16 L 13 -16 L 13 2 C 13 13, 0 19, 0 19 C 0 19, -13 13, -13 2 Z"
                fill="var(--bg-canvas)"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              {/* 悲剧眼窝与下撇嘴角 */}
              <ellipse cx="-5" cy="-6" rx="2.5" ry="1.8" fill="currentColor" />
              <ellipse cx="5" cy="-6" rx="2.5" ry="1.8" fill="currentColor" />
              <path d="M -6 9 Q 0 3, 6 9" fill="none" stroke="currentColor" strokeWidth="1.3" />
              <text x="0" y="30" textAnchor="middle" fill="currentColor" fontSize="6.8" fontFamily="JetBrains Mono, monospace">
                1799
              </text>
            </g>

            {/* 右侧：1851 笑剧/滑稽剧面具（Farce Mask，蓄着路易·波拿巴八字胡） */}
            <g transform="translate(150, 152)">
              <path
                d="M -13 -16 L 13 -16 L 13 2 C 13 13, 0 19, 0 19 C 0 19, -13 13, -13 2 Z"
                fill="var(--bg-canvas)"
                stroke="var(--accent-nrf)"
                strokeWidth="1.1"
              />
              {/* 笑剧眯眼、翘胡子与咧嘴 */}
              <path d="M -8 -6 Q -5 -9, -2 -6" fill="none" stroke="currentColor" strokeWidth="1.1" />
              <path d="M 2 -6 Q 5 -9, 8 -6" fill="none" stroke="currentColor" strokeWidth="1.1" />
              {/* 波拿巴标志性尖翘八字胡 */}
              <path d="M -11 2 Q -4 0, 0 3 Q 4 0, 11 2" fill="none" stroke="currentColor" strokeWidth="1.3" />
              <path d="M -6 7 Q 0 13, 6 7" fill="none" stroke="var(--accent-nrf)" strokeWidth="1.3" />
              <text x="0" y="30" textAnchor="middle" fill="var(--accent-nrf)" fontSize="6.8" fontFamily="JetBrains Mono, monospace">
                1851
              </text>
            </g>

            {/* 底座交叉的政变刺刀（Bayonets） */}
            <line x1="68" y1="214" x2="140" y2="194" stroke="currentColor" strokeWidth="1.1" />
            <line x1="140" y1="214" x2="68" y2="194" stroke="currentColor" strokeWidth="1.1" />
          </g>

          {/* 底部 1852 纽约 / 1869 汉堡牌记 */}
          <text
            x="104"
            y="239"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7.2"
            fontFamily="EB Garamond, Georgia, serif"
            letterSpacing="1.6"
          >
            NEW YORK · HAMBURG
          </text>
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fill="currentColor"
            fontSize="7"
            fontFamily="EB Garamond, Georgia, serif"
            fontStyle="italic"
          >
            Die Revolution (1852) · O. Meissner (1869)
          </text>
        </svg>
      );
  }
}
