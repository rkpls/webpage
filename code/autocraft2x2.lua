@ -1,46 +0,0 @@
-- Chest Setup: 
-- Top = Output Chest. Crafted Items Go here
-- Front = Buffer Chest. Turtle will store items there, that it can not yet craft.
-- Below = Input Chest. Put 2x2 Craftable Stuff there.
-- Assumes that One Stack of Input will yield less than one stack.

bufferCell = 13
craftingCell = 16
-- Drop any items not yet crafted down.
for k,i in pairs({1,2,5,6,bufferCell, (bufferCell + 1)}) do
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
    if numberOf >= 4 then
      amount = numberOf / 4
      turtle.transferTo(1,amount)
      turtle.transferTo(2,amount)
      turtle.transferTo(5,amount)
      turtle.transferTo(6,amount)
      turtle.dropDown()
      turtle.select(craftingCell)
      -- Should be empty!
      turtle.craft()
      turtle.dropUp()
    else
      turtle.suckDown()
      turtle.dropDown()
      turtle.select(bufferCell + 1)
      turtle.dropDown()
    end
  end
end
