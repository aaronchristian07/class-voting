export type Vote = "Yes" | "No";

export interface VoteRequestDto {
    vote: Vote,
    desc: string | null,
}