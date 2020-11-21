# skr-shop 抖音电商

## 订单

## 模块化
    - 地址表
        设计这个表?
        根据需求
        consignee：收货人姓名  string
        mobile   手机号  string
        （碎片化数据库）nosql
        mongodb JSON存进去
        {
            id：86,
            name:'中国',
        }
        country  object  id   int64   国家ID
        country  object  name string  国家名称
        province object  id   int64   省ID
        province object  name string  省名称
        city 
        country
        street 
        detailed_address 用户填的详细地址
        postal_code string 邮编
        address_id 地址ID int64
        时间戳+随机数四位（js中使用new date()获取时间戳，+new date()时间戳从对象变为number，Math.random()获取随机数）