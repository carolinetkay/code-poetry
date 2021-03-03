def tired?
  my_wellbeing = %w[lethargic energetic zen].sample
  if my_wellbeing == 'lethargic'
    true
  elsif my_wellbeing == 'energetic'
    false
  else
    yield
  end
end

def yield_to_god
  return 'till kingdom come'
end

puts (tired? { yield_to_god })
