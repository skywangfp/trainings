# 使用field.book_create时，找不到field，换一个名字就正常ß

```ruby
module Types
  class MutationType < Types::BaseObject
    field :booo, BookType, null: false do
      description "Create a book by ID"
      argument :name, String, required: true
      argument :author, String, required: true
      argument :price, Float, required: true
    end
    def booo(name:, author:, price:)
      Book.create!(
        name: name,
        author: author,
        price: price
      )
    end
  end
end
```

```ruby
result_hash = GplTestSchema.execute "mutation{book_create(name: \"aaa\",author:\"aaa\",price:123.45)\n{\nid\nname,author,price}}"
 => #<GraphQL::Query::Result @query=... @to_h={"errors"=>[{"message"=>"Field 'book_create' doesn't exist on type 'Mutation'", "locations"=>[{"line"=>1, "column"=>10}], "path"=>["mutation", "book_create"], "extensions"=>{"code"=>"undefinedField", "typeName"=>"Mutation", "fieldName"=>"book_create"}}]}>
```

```ruby
result_hash = GplTestSchema.execute "mutation{booo(name: \"aaa\",author:\"aaa\",price:123.45)\n{\nid\nname,author,price}}"
   (0.1ms)  BEGIN
  Book Create (0.1ms)  INSERT INTO `books` (`name`, `author`, `price`, `created_at`, `updated_at`) VALUES ('aaa', 'aaa', 123, '2019-06-25 08:00:15', '2019-06-25 08:00:15')
   (0.2ms)  COMMIT
 => #<GraphQL::Query::Result @query=... @to_h={"data"=>{"booo"=>{"id"=>"304", "name"=>"aaa", "author"=>"aaa", "price"=>123.0}}}>
```
