using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;

namespace backend;

// public class VoteHub(ILogger<VoteHub> logger) : Hub

public record ChatMessage
{
    public required string user { get; init; }
    public required string message { get; init; }
}

public class VoteHub : Hub
{
    public async Task SendMessage(ChatMessage payload)
    {
        Console.WriteLine($"payload: {payload.user}, {payload.message}");
        await Clients.All.SendAsync("ReceiveMessage", payload);
    }
}
