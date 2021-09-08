const dynamicPlasm = new Effect(30, e => {
	let intensity = 1;
	let baseLifetime = intensity * 15;
	let rand = new Rand();

	Draw.color(Color.valueOf("7f7fff"));
	
	Draw.alpha(0.9);

	for(let i = 0; i < 4; i++){
	    rand.setSeed(e.id*2 + i);
	    let lenScl = rand.random(0.4, 1);
	    let fi = i;
	    e.scaled(e.lifetime * lenScl, b => {
    	    Angles.randLenVectors(e.id, 6, 2 + 19 * e.finpow() * intensity, (x, y) => {
        	    let fout = b.fout(Interp.pow5Out) * rand.random(0.5, 1);
            	Fill.circle(e.x + x, e.y + y, fout * (2 + intensity) * 1.8);
	            Drawf.light(e.x + x, e.y + y, fout * (5 + intensity) * 1.8, Color.white, 0.9 * e.fout());
    	    });
    	});
	}

	e.scaled(baseLifetime, b => {
    	b.scaled(5 + intensity * 2.5, i => {
        	Lines.stroke((3.1 + intensity/5) * i.fout());
        	Lines.circle(b.x, b.y, i.fout() * (3 + i.fin() * 14) * intensity);
        	Drawf.light(b.x, b.y, i.fin() * 14 * 2 * intensity, Color.white, 0.9 * e.fout());
    	});

	    Draw.color(Color.green, Color.white, b.fin());
    	Lines.stroke(intensity);

	    Draw.z(Layer.effect + 0.001);
    	Angles.randLenVectors(b.id + 1, 8, 1 + 23 * e.finpow(), (x, y) => {
       	    Lines.lineAngle(b.x + x * intensity, b.y + y * intensity, Mathf.angle(x, y), 1 + e.fout() * 3);
        });
	});
});

const titanicBullet = extend(ArtilleryBulletType, {
	speed: 4,
	lifetime: 200 / 4,
	damage: 320,
	frontColor: Color.valueOf("7f7fff"),
	backColor: Color.valueOf("5f5f9f"),
	despawnEffect: dynamicPlasm,
	splashDamage: 320,
	splashDamageRadius: 16,
});

const titanicWeapon = extend(Weapon, "electra-pulse-cannon", {
	mirror: true,
	reload: 60,
	alternate: true,
	ejectEffect: Fx.none,
	shootSound: Sounds.none,
	bullet: titanicBullet
});

const titanic = extend(UnitType, "titanic", {
	health: 8300,
    legCount: 8,
    legLength: 30,
    legTrns: 0.8,
    legMoveSpace: 1.4,
    legBaseOffset: 2
});
titanic.weapons.add(titanicWeapon);
titanic.constructor = () => extend(UnitEntity, {});