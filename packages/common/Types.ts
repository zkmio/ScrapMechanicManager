
export {}

declare global {
    
    interface LoadGameLog {
        complete: boolean
        success: boolean
        log: string
    }

    interface ModpackData {
        name: string
        baseGame: string
        mods: string[]
    }
}