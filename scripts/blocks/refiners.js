const refiner = extend(GenericCrafter, "refiner", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("ugly-fuel-refiner");
		this.InputRegion = Core.atlas.find("ugly-fuel-refiner-liquidIn");
		this.outputRegion = Core.atlas.find("ugly-fuel-refiner-liquidOut");
	}
});
refiner.buildType = () => extend(GenericCrafter.GenericCrafterBuild, refiner, {
	draw(tile){
		let inputLiquid = refiner.consumes.get(ConsumeType.liquid).liquid;

		Draw.rect(refiner.region, this.x, this.y, 0);

		Draw.color(Liquids.oil.color);
		Draw.alpha(this.liquids.get(inputLiquid) / refiner.liquidCapacity);
		Draw.rect(refiner.InputRegion, this.x, this.y);

		Draw.color(Color.valueOf("5F9463"));
		Draw.alpha(this.liquids.get(refiner.outputLiquid.liquid) / refiner.liquidCapacity);
		Draw.rect(refiner.outputRegion, this.x, this.y);
	}
});

const soulRefiner = extend(GenericCrafter, "soul-refiner", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("ugly-fuel-soul-refiner");
		this.InputRegion = Core.atlas.find("ugly-fuel-soul-refiner-liquidIn");
		this.outputRegion = Core.atlas.find("ugly-fuel-soul-refiner-liquidOut");
	}
});
soulRefiner.buildType = () => extend(GenericCrafter.GenericCrafterBuild, soulRefiner, {
	draw(tile){
		let inputLiquid = soulRefiner.consumes.get(ConsumeType.liquid).liquid;

		Draw.rect(soulRefiner.region, this.x, this.y, 0);

		Draw.color(Color.valueOf("5F9463"));
		Draw.alpha(this.liquids.get(inputLiquid) / soulRefiner.liquidCapacity);
		Draw.rect(soulRefiner.InputRegion, this.x, this.y);

		Draw.color(Color.valueOf("5C808E"));
		Draw.alpha(this.liquids.get(refiner.outputLiquid.liquid) / soulRefiner.liquidCapacity);
		Draw.rect(soulRefiner.outputRegion, this.x, this.y);
	}
})