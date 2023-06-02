-- 코드를 입력하세요
select f.FLAVOR from FIRST_HALF f
left join ICECREAM_INFO i
on f.FLAVOR = i.FLAVOR
where f.TOTAL_ORDER > 3000 and i.INGREDIENT_TYPE like 'fruit%'
order by f.TOTAL_ORDER desc