-- 코드를 입력하세요
SELECT count(*) as USER_ID from USER_INFO
where AGE between '20' and '29' and year(JOINED) = '2021'
