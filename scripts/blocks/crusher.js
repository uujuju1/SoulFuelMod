const crusher = extend(GenericCrafter, "crusher", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("ugly-fuel-crusher");
		this.bottomRegion = Core.atlas.find("ugly-fuel-crusher-bottom");
		this.middleRegion = Core.atlas.find("ugly-fuel-crusher-crusher");
	},
    generateIcons(){
        return [
            Core.atlas.find(this.name),
            Core.atlas.find(this.name + "-bottom"),
        ];
    }
});
crusher.buildType = () => extend(GenericCrafter.GenericCrafterBuild, crusher, {
	crusher1x: 0,
	crusher2x: 0,
	alt: false,
	draw(){
		Draw.rect(crusher.bottomRegion, this.x, this.y, 0)
		Draw.rect(crusher.middleRegion, this.x + this.crusher1x, this.y, 0);
		Draw.rect(crusher.middleRegion, this.x + this.crusher2x, this.y, 180);
		Draw.rect(crusher.region, this.x, this.y, 0);
	},
	updateTile(){
		this.super$updateTile();
		if (this.crusher1x <= -0.9) {
			this.alt = true;
		};
		if (this.crusher1x >= 0.9) {
			this.alt = false;
		};
		if (this.alt) {
			this.crusher1x+= 0.5;
			this.crusher2x-= 0.5;
		} else {
			this.crusher1x-= 0.5;
			this.crusher2x+= 0.5;
		};
	}
})