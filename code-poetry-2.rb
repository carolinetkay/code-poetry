def I_owe_you
  yield
end

def empty_promises
  'nothing'
end

puts I_owe_you { empty_promises }
