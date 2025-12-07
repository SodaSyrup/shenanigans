ServerEvents.recipes(event => {
    
  function head(output, headInput1, headInput2, headInput3) {
    event.shaped(output, [
      'XZX',
      'ZYZ',
      'XZX'  
    ], {
      X: headInput1,
      Y: headInput2,
      Z: headInput3
    })
  }
    
  head('minecraft:creeper_head', 'minecraft:gunpowder', 'minecraft:jack_o_lantern', 'minecraft:lime_dye')
  head('minecraft:zombie_head', 'minecraft:rotten_flesh', 'minecraft:jack_o_lantern', 'minecraft:green_dye')
  head('minecraft:dragon_head', 'minecraft:chorus_fruit', 'minecraft:jack_o_lantern', 'minecraft:black_dye')
  head('minecraft:skeleton_skull', 'minecraft:bone', 'minecraft:jack_o_lantern', 'minecraft:white_dye')
  head('minecraft:wither_skeleton_skull', 'minecraft:crying_obsidian', 'minecraft:diamond', 'minecraft:gilded_blackstone')
    
  // this just used the same recipe format
  head('minecraft:dragon_egg', 'minecraft:chorus_fruit', 'minecraft:diamond_block', 'minecraft:black_dye')
})
