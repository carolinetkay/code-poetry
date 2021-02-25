def angry(anger=true)
  anger = "red"
  anger = "outburst"
  anger = "frustration"
  anger = "indignation"
  anger = %w[assertive aggressive passive-aggressive suppressive].sample
  anger.split()
  return anger unless true   
  return "fear"
end

puts angry("anger")