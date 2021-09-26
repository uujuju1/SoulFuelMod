const crusher = extend(GenericCrafter, "crusher", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("ugly-fuel-crusher");
		this.bottomRegion = Core.atlas.find("ugly-fuel-crusher-bottom");
		this.middleRegion = Core.atlas.find("ugly-fuel-crusher-crusher");
	}
});
crusher.buildType = () => extend(GenericCrafter.GenericCrafterBuild, crusher, {
	draw(){
		Draw.rect(crusher.bottomRegion, this.x, this.y, 0)
		Draw.rect(crusher.middleRegion, this.x + Angles.trnsx(this.totalProgress * 360, 0.5), this.y, 0);
		Draw.rect(crusher.middleRegion, this.x + Angles.trnsx(this.totalProgress * 360, -0.5), this.y, 180);
		Draw.rect(crusher.region, this.x, this.y, 0);
	}
});
