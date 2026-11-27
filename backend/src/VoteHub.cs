using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;

namespace backend;

public record ChatMessage
{
    public required string user { get; init; }
    public required string message { get; init; }
}

public record VoteRequestDto
{
    public required string vote { get; init; }
    public string? desc { get; init; }
}

public class VoteHub : Hub
{
    public async Task SendMessage(ChatMessage payload)
    {
        Console.WriteLine($"payload: {payload.user}, {payload.message}");
        await Clients.All.SendAsync("ReceiveMessage", payload);
    }

    public async Task CastVote(VoteRequestDto payload)
    {
        Console.WriteLine($"payload: {payload.vote}, {payload.desc}");
        // await Clients.All.SendAsync("ReceiveMessage", payload);
    }
}
