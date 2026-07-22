# FinancePilot API — Merge Guide (মোবাইল থেকে GitHub Upload)

এই zip-এ ৪টা folder আছে। প্রতিটা folder-এর ফাইলগুলো তোমার `financepilot-api`
repo-র **ঠিক একই নামের folder-এ** upload করতে হবে। GitHub-এর mobile web
editor-এ folder upload করা যায় না, কিন্তু **একই folder-এর ভিতরে multiple
files একসাথে** upload করা যায় — সেটাই আমরা করব।

## যেভাবে upload করবে (প্রতিটা ধাপে একই পদ্ধতি)

1. Repo-র মূল পেজে গিয়ে target folder-এ ঢোকো (নিচের তালিকা দেখো)
2. **Add file → Upload files** এ tap করো
3. Phone-এর file manager থেকে সেই folder-এর সব ফাইল **একসাথে select** করো
   (long-press করে multi-select মোড চালু করে বাকিগুলো tap করো)
4. উপরে ড্র্যাগ করে ছেড়ে দাও অথবা "Upload" চাপো
5. নিচে **Commit changes** করো

যদি সেই target folder repo-তে না থাকে, "Add file → Create new file" দিয়ে
প্রথমে path-সহ একটা ফাইলের নাম লিখলে (যেমন `database/migrations/x.php`)
GitHub নিজে থেকেই folder তৈরি করে নেবে।

---

## Folder 1 → `database/migrations/`

zip-এর `database/migrations/` থেকে **সবগুলো ফাইল** upload করো (১০টা)।

⚠️ **গুরুত্বপূর্ণ:** পুরনো users migration নেই এখানে — কারণ Laravel 13-এর
নিজস্ব users migration আগে থেকেই আছে। এর বদলে একটা নতুন migration আছে
(`..._add_role_to_users_table.php`) যেটা শুধু `role` column যোগ করবে।

## Folder 2 → `app/Models/`

zip-এর `app/Models/` থেকে সবগুলো ফাইল upload করো (৮টা)। এখানে `User.php`
আছে — এটা Laravel-এর ডিফল্ট `User.php`-কে **replace/overwrite** করবে
(GitHub upload করার সময় "This will replace existing file" জাতীয় নোটিশ
দেখালে confirm করে দাও)।

## Folder 3 → `app/Http/Controllers/Api/`

zip-এর `app/Http/Controllers/Api/` থেকে ৪টা ফাইল (ArticleController,
AuthorController, CategoryController, NewsletterController) সরাসরি এই
folder-এ upload করো।

তারপর **নতুন subfolder** `app/Http/Controllers/Api/Admin/` বানাও (Create
new file দিয়ে `app/Http/Controllers/Api/Admin/ArticleController.php` লিখে
শুরু করলে subfolder এমনি তৈরি হবে) এবং zip-এর `Admin/` folder থেকে ২টা
ফাইল (ArticleController, AuthController) upload করো।

## Folder 4 → `app/Http/Middleware/`

zip-এর `EnsureUserHasRole.php` এখানে upload করো।

## Folder 5 → `routes/`

zip-এর `routes/api.php` — Laravel-এর ডিফল্ট `routes/api.php` কে
**replace** করো।

---

## শেষ ধাপ: middleware register করা

`bootstrap/app.php` ফাইল খুলে edit করো। এতে `->withMiddleware(function
(Middleware $middleware) {` অংশ খুঁজে বের করো এবং ভিতরে এই লাইন যোগ করো:

```php
$middleware->alias([
    'role' => \App\Http\Middleware\EnsureUserHasRole::class,
]);
```

সব upload আর এই edit শেষ হলে Render-এ deploy করার জন্য প্রস্তুত।
