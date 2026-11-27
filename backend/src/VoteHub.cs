using System;
using System.Net.WebSockets;
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
    static int[] votes = {0, 0};

    public async Task SendMessage(ChatMessage payload)
    {
        Console.WriteLine($"payload: {payload.user}, {payload.message}");
        await Clients.All.SendAsync("ReceiveMessage", payload);
    }

    public async Task CastVote(VoteRequestDto payload)
    {
        Console.WriteLine($"payload: {payload.vote}, {payload.desc}");
        updateVote(payload);
        await PublishVote();
    }

    private void updateVote(VoteRequestDto payload)
    {
        int index = (payload.vote.ToLowerInvariant() == "yes") ? 0 : 1;
        votes[index]++;
    }

    public async Task PublishVote()
    {
        Console.WriteLine($"publishing votes: {votes[0]}, {votes[1]}");
        await Clients.All.SendAsync("PublishVote", votes);
    }

    
}
