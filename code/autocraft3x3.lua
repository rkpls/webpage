-- Chest Setup: 
-- Top = Output Chest. Crafted Items Go here
-- Front = Buffer Chest. Turtle will store items there, that it can not yet craft.
-- Below = Input Chest. Put 2x2 Craftable Stuff there.
-- Assumes that One Stack of Input will yield less than one stack.

bufferCell = 13
craftingCell = 16
-- Drop any items not yet crafted down.
for k,i in pairs({1,2,3,5,6,7,9,10,11,bufferCell, (bufferCell + 1)}) do
	turtle.select(i)
	turtle.dropDown()
end
-- Drop Output Items up
for k,i in pairs({craftingCell}) do
	turtle.select(i)
	turtle.dropUp()
end
while true do
  turtle.select(bufferCell)
  turtle.dropDown()
  if not turtle.suckDown() then
    while turtle.suck() do
      turtle.dropDown()
    end
  else 
    numberOf = turtle.getItemCount(bufferCell)
    if numberOf >= 9 then
      amount = numberOf / 9
      turtle.transferTo(1,amount)
      turtle.transferTo(2,amount)
      turtle.transferTo(3,amount)
      turtle.transferTo(5,amount)
      turtle.transferTo(6,amount)
      turtle.transferTo(7,amount)
      turtle.transferTo(9,amount)
      turtle.transferTo(10,amount)
      turtle.transferTo(11,amount)
      turtle.drop()
      turtle.select(craftingCell)
      -- Should be empty!
      turtle.craft()
      turtle.dropUp()
    else
      turtle.suckDown()
      turtle.drop()
      turtle.select(bufferCell + 1)
      turtle.dropDown()
    end
  end
end