using backend;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();
// var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy(
//         name: MyAllowSpecificOrigins,
//         policy  =>
//         {
//             policy.WithOrigins("http://localhost:5173")
//                 .AllowAnyHeader()
//                 .AllowAnyMethod();
//         });
// });


var app = builder.Build();

app.MapGet("/", () => "Hello Bananas!");
app.MapHub<VoteHub>("/vote");

app.Run();
