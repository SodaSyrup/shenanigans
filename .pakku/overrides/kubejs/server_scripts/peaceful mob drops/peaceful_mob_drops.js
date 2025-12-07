ServerEvents.recipes(event => {
  event.shaped('minecraft:ender_pearl', [
    'XXX',
    'XYX',
    'XXX'
  ], {
    X: 'minecraft:obsidian',
    Y: 'minecraft:gold_ingot'
  }),
  event.shaped('minecraft:sponge', [
    'XXX',
    'X X',
    'XXX'
  ], {
    X: 'minecraft:yellow_wool'
  }),
  event.shaped('minecraft:nether_star', [
    'XXX',
    'XXX',
    'XXX'
  ], {
    X: 'minecraft:wither_skeleton_skull'
  }),
  event.shaped('minecraft:blaze_rod', [
    'X X',
    'XYX',
    'X X'
  ], {
    X: 'minecraft:quartz',
    Y: 'lava_bucket'
  }),
  event.shaped('minecraft:ghast_tear', [
    'XXX',
    'XYX',
    'XXX'
  ], {
    X: 'minecraft:quartz',
    Y: 'water_bucket'
  }),
  event.shaped('minecraft:shulker_shell', [
    'XXX',
    'XYX',
    'XXX'
  ], {
    X: 'minecraft:end_stone',
    Y: 'chorus_flower'
  }),
  event.shaped('minecraft:slime_ball', [
    'ZXZ',
    'XYX',
    'ZXZ'
  ], {
    X: 'minecraft:cactus',
    Y: 'water_bucket',
    Z: 'lily_pad'
  }),
  event.shaped('minecraft:bone', [
    'XXX'
  ], {
    X: 'minecraft:bone_meal'
  }),
  event.shaped('minecraft:trident', [
    'XXX',
    'ZYZ',
    'ZYZ'
  ], {
    X: 'minecraft:diamond',
    Y: 'minecraft:prismarine_crystals',
    Z: 'minecraft:prismarine_shard'
  }),
  event.shaped('minecraft:phantom_membrane', [
    'XXX'
  ], {
    X: '#minecraft:beds'
  }),
  event.shaped('minecraft:prismarine_crystals', [
    'XYX'
  ], {
    X: 'minecraft:glass',
    Y: 'minecraft:kelp'
  }),
  event.shaped('minecraft:prismarine_shard', [
    'XYX'
  ], {
    X: 'minecraft:gravel',
    Y: 'minecraft:kelp'
  }),
  event.shaped('minecraft:spider_eye', [
    'XY',
    'YX'
  ], {
    X: 'minecraft:red_mushroom',
    Y: 'minecraft:brown_mushroom'
  }),
  event.shaped('minecraft:ink_sac', [
    'XY'
  ], {
    X: 'minecraft:water_bucket',
    Y: '#minecraft:coals'
  }),
  event.shaped('minecraft:glow_ink_sac', [
    'XY'
  ], {
    X: 'minecraft:ink_sac',
    Y: 'minecraft:glowstone_dust'
  }),
  event.shaped(Item.of('minecraft:rabbit_hide', 4), [
    'X'
  ], {
    X: 'minecraft:leather'
  }),
  event.shaped('minecraft:rabbit_foot', [
    'XZX',
    'ZYZ',
    'XZX'
  ], {
    X: 'minecraft:carrot',
    Y: 'minecraft:rabbit',
    Z: 'minecraft:rabbit_hide'
  }),
  event.shaped('minecraft:feather', [
    'X'
  ], {
    X: 'minecraft:egg'
  }),
  event.shaped('minecraft:gunpowder', [
    'X'
  ], {
    X: 'minecraft:flint'
  })
})
