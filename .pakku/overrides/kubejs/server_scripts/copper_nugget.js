ServerEvents.recipes(event => {
    event.remove({ output: 'clutter:copper_nugget' })
    event.remove({ output: 'spelunkery:copper_nugget' })

    let copperNugget = ["clutter:copper_nugget", "spelunkery:copper_nugget"];
    
    copperNugget.forEach(copperNugget => {
        event.shapeless(
            Item.of('create:copper_nugget'),
            [
                `${copperNugget}`
            ]
        );
    });
    event.replaceInput(
		{ input: 'clutter:copper_nugget' },
		'clutter:copper_nugget',
		'create:copper_nugget'
	);
});