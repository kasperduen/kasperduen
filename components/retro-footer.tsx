export function RetroFooter() {
	return (
		<footer className="flex flex-col items-center gap-3 py-6">
			<div className="retro-hr w-full" style={{ height: "4px" }} />

			{/* 88x31 buttons row */}
			<div className="flex flex-wrap items-center justify-center gap-2">
				<div
					className="bevel-raised flex items-center justify-center font-mono text-[8px] font-bold leading-tight"
					style={{
						width: 88,
						height: 31,
						backgroundColor: "#c0c0c0",
						color: "#000080",
					}}
				>
					{"Made with Notepad"}
				</div>
				<div
					className="bevel-raised flex items-center justify-center font-mono text-[8px] font-bold leading-tight"
					style={{
						width: 88,
						height: 31,
						backgroundColor: "#008080",
						color: "#ffffff",
					}}
				>
					{"Best viewed 800x600"}
				</div>
				<div
					className="bevel-raised flex items-center justify-center font-mono text-[8px] font-bold leading-tight"
					style={{
						width: 88,
						height: 31,
						backgroundColor: "#000080",
						color: "#ffff00",
					}}
				>
					{"HTML 3.2"}
				</div>
			</div>

			{/* Copyright */}
			<div className="bevel-raised bg-retro-silver px-4 py-2">
				<p className="text-center font-mono text-xs text-retro-black">
					{"Copyright (c) 1994-2026 Kasper Due. All Rights Reserved."}
					<br />
					{
						"This site is not affiliated with Netscape Communications, Microsoft, or GeoCities."
					}
					<br />
					{
						"Best viewed with Netscape Navigator 4.0 or higher at 800x600 resolution."
					}
					<br />
					{"No animals were harmed in the making of this website."}
				</p>
			</div>

			{/* Disclaimer */}
			<p className="max-w-lg text-center font-mono text-[10px] text-retro-gray">
				{
					"Disclaimer: This is a retro-themed personal homepage. All links to 90s websites "
				}
				{
					"are for nostalgic purposes only. The visitor counter is definitely 100% real and not fake at all."
				}
			</p>

			<div className="retro-hr w-full" style={{ height: "4px" }} />

			<p className="retro-glow font-serif text-sm text-retro-cyan">
				{"Thanks for visiting! Come back soon! =)"}
			</p>
		</footer>
	);
}
