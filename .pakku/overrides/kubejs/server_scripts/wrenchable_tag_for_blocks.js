ServerEvents.tags('block', event => {
    const wrenchPickup = 'create:wrench_pickup';

    const nonWrenchPickup = [
      '@toms_storage',
      '@storagedrawers',
      '@wirelessredstone',
      '@ironchests',
      'spelunkery:compression_blast_miner',
      'spelunkery:wooden_channel',
      'spelunkery:wooden_sluice',
      'spelunkery:stone_channel',
      'spelunkery:stone_sluice'
    ];

    event.add(wrenchPickup, nonWrenchPickup);

    console.info('KubeJS: Finished wrenchable block tag processing.');
});