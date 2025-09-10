"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface MintedName {
  id: string
  username: string
  timestamp: number
  role?: string
  avatar?: string
}

function formatDateTime(ts: number) {
  const d = new Date(ts)
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
}

const PFP_OPTIONS = [
  "/images/pfps/thekaezy.png",
  "/images/pfps/portrait-1.png",
  "/images/pfps/portrait-2.png",
  "/images/pfps/portrait-3.png",
  "/images/pfps/portrait-4.png",
  "/images/pfps/portrait-5.png",
  "/images/pfps/portrait-6.png",
  "/images/pfps/portrait-7.png",
  "/images/pfps/portrait-8.png",
  "/images/pfps/portrait-9.png",
  "/images/pfps/portrait-10.png",
  "/images/pfps/portrait-11.png",
  "/images/pfps/portrait-12.png",
  "/images/pfps/portrait-13.png",
  "/images/pfps/portrait-14.png",
  "/images/pfps/portrait-15.png",
  "/images/pfps/portrait-16.png",
  "/images/pfps/portrait-17.png",
  "/images/pfps/portrait-18.png",
  "/images/pfps/portrait-19.png",
  "/images/pfps/portrait-20.png",
  "/images/pfps/portrait-21.png",
  "/images/pfps/portrait-22.png",
  "/images/pfps/portrait-23.png",
  "/images/pfps/portrait-24.png",
  "/images/pfps/portrait-25.png",
]

export default function AnomaNameService() {
  const [username, setUsername] = useState("")
  const [mintedNames, setMintedNames] = useState<MintedName[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isRoleOpen, setIsRoleOpen] = useState(false)
  const [role, setRole] = useState("")
  const [avatar, setAvatar] = useState(PFP_OPTIONS[0])

  const openRoleModal = () => {
    if (!username.trim()) return
    setIsRoleOpen(true)
  }

  const handleGeneratePass = async () => {
    if (!role.trim()) return
    setIsLoading(true)
    setIsRoleOpen(false)

    setTimeout(() => {
      const now = Date.now()
      const newMintedName: MintedName = {
        id: now.toString(),
        username: username.trim(),
        timestamp: now,
        role: role.trim(),
        avatar,
      }
      setMintedNames((prev) => [...prev, newMintedName])
      setUsername("")
      setRole("")
      setIsLoading(false)
    }, 800)
  }

  const disabledMint = useMemo(() => !username.trim() || isLoading, [username, isLoading])

  function shareOnX() {
    const text = "HEY ANOMA MAGES I MINTED MY ANOMA NAME SERVICE CARD HURRY UP AND MINT YOURS CREATED BY @thekaezy"
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">
            <div className="hidden md:flex justify-self-start items-center gap-2 text-sm font-medium text-muted-foreground">
              <span>
                Cohort Team : <span className="font-semibold text-foreground">Anoma Dinos</span>
              </span>
              <img
                src="/images/pfps/anoma-dinos-cohort.png"
                alt="Anoma Dinos Cohort emblem"
                className="h-7 w-auto md:h-8 rounded-sm ring-1 ring-border object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2 justify-self-center">
              <img src="/images/logos/anoma-mark.png" alt="Anoma logo" className="h-6 w-6 md:h-8 md:w-8" />
              <h1 className="text-center text-xl md:text-2xl font-bold text-primary">Anoma Name Service</h1>
            </div>
            <div className="justify-self-end flex items-center gap-3">
              <a
                href="https://x.com/TheKaezy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Created by @thekaezy on X"
              >
                Created By <span className="font-semibold glow-white">@thekaezy</span>
              </a>
              <img
                src="/images/pfps/thekaezy.png"
                alt="TheKaezy profile image"
                className="h-8 w-8 rounded-full ring-1 ring-border object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="gradient-hero text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold text-balance leading-tight">Your Identity on Anoma</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed">
              Mint your unique .anoma domain name and claim your permanent identity on the Anoma network. Stored
              forever, owned by you.
            </p>

            <div className="max-w-md mx-auto mt-12">
              <div className="space-y-4">
                <label htmlFor="username" className="block text-lg font-medium text-white/95">
                  Enter your X username
                </label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Input
                      id="username"
                      type="text"
                      placeholder="yourname"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-white/95 border-white/30 text-gray-900 placeholder:text-gray-500 focus:border-white focus:ring-white/50 h-12 text-lg professional-shadow"
                      onKeyDown={(e) => e.key === "Enter" && openRoleModal()}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">
                      .anoma
                    </span>
                  </div>
                  <Button
                    onClick={openRoleModal}
                    disabled={disabledMint}
                    className="bg-white text-primary hover:bg-gray-50 font-semibold px-8 h-12 text-lg professional-shadow-lg"
                  >
                    {isLoading ? "Minting..." : "Check & Mint"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isRoleOpen} onOpenChange={setIsRoleOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>What’s your Anoma Discord role?</DialogTitle>
            <DialogDescription>Provide your role and choose a portrait for your magical ID pass.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                Discord Role
              </label>
              <Input
                id="role"
                placeholder="e.g., Grand Master"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="h-10"
                onKeyDown={(e) => e.key === "Enter" && handleGeneratePass()}
              />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Choose a Portrait</p>
              <div className="grid grid-cols-5 gap-3">
                {PFP_OPTIONS.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setAvatar(src)}
                    className={`rounded-md overflow-hidden ring-2 transition ${
                      avatar === src ? "ring-primary" : "ring-transparent hover:ring-muted"
                    }`}
                    aria-label="Select portrait"
                  >
                    <img src={src || "/placeholder.svg"} alt="portrait option" className="h-16 w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setIsRoleOpen(false)}>
              Cancel
            </Button>
            <Button disabled={!role.trim()} onClick={handleGeneratePass}>
              Generate Pass
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <main className="container mx-auto px-4 py-16">
        {mintedNames.length > 0 && (
          <div className="max-w-5xl mx-auto space-y-8 mb-20">
            <h3 className="text-3xl font-bold text-center text-foreground">Minted Passes</h3>
            <div className="grid gap-10">
              {mintedNames.map((mintedName, index) => (
                <div key={mintedName.id} className="space-y-4">
                  <CinematicPassCard
                    username={mintedName.username}
                    role={mintedName.role || "Anoma Mage"}
                    issuedAt={formatDateTime(mintedName.timestamp)}
                    avatar={mintedName.avatar || PFP_OPTIONS[0]}
                    delayMs={index * 200}
                  />
                  <div className="flex justify-end">
                    <Button onClick={shareOnX} className="bg-primary text-white hover:opacity-90">
                      Share on X
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-6">Why Choose .anoma Domains?</h3>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Built on Anoma network for permanent, decentralized domain ownership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Permanent Ownership card stays the same */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto professional-shadow">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Permanent Ownership</h4>
              <p className="text-muted-foreground leading-relaxed">
                No expiration dates or renewal fees. Once minted, it's yours forever on the blockchain.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto professional-shadow">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Easy Sharing & Branding</h4>
              <p className="text-muted-foreground leading-relaxed">
                Instead of random wallet addresses, share your .anoma name for payments, profiles, and collaborations.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto professional-shadow">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Community Flex</h4>
              <p className="text-muted-foreground leading-relaxed">
                Show you’re an early supporter of Anoma. Your domain is a badge of honor in the ecosystem.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border gradient-subtle">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground">Powered by Anoma Network • Built for the future</p>
        </div>
      </footer>
    </div>
  )
}

function CinematicPassCard({
  username,
  role,
  issuedAt,
  avatar,
  delayMs = 0,
}: {
  username: string
  role: string
  issuedAt: string
  avatar: string
  delayMs?: number
}) {
  return (
    <div
      className="w-full max-w-5xl mx-auto aspect-video pass-cosmic professional-shadow-lg animate-fade-in-up"
      style={{ animationDelay: `${delayMs}ms` }}
      aria-label="Anoma Magical ID Pass"
    >
      <div className="absolute inset-3 md:inset-5 pass-frame p-4 md:p-6 text-white">
        <div className="grid grid-cols-[minmax(140px,220px)_1fr] gap-4 md:gap-8 h-full">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl blur-md bg-red-500/60" aria-hidden="true" />
            <div className="relative h-full w-full rounded-xl overflow-hidden ring-2 ring-white/60">
              <img
                src={avatar || "/placeholder.svg"}
                alt="Portrait"
                className="h-full w-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </div>

          <div className="relative flex flex-col justify-center">
            <div className="space-y-3 md:space-y-4 text-sm md:text-base">
              <Line label="Name" value={`${username}.anoma`} order={1} />
              <Line label="Role" value={role} order={2} />
              <Line label="Date and Time of Issue" value={issuedAt} order={3} />
              <Line label="Expiry" value="Eternity" order={4} />
              <Line label="Intent" value={'"Ruler, You’re a true Anoma mage"'} order={5} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center">
          <div className="h-px w-24 bg-white/70 mr-3" />
          <span className="text-white font-extrabold tracking-wide uppercase drop-shadow">Anoma Name Service</span>
          <div className="h-px w-24 bg-white/70 ml-3" />
        </div>
      </div>
    </div>
  )
}

function Line({ label, value, order }: { label: string; value: string; order: number }) {
  const delay = `${order * 250}ms`
  return (
    <div
      className="flex items-start gap-3 text-reveal"
      style={{ animationDelay: delay }}
      role="text"
      aria-label={`${label}: ${value}`}
    >
      <span className="spark mt-1" aria-hidden="true" />
      <div>
        <div className="text-white/70 text-xs md:text-sm">{label}:</div>
        <div className="text-white font-semibold md:text-lg drop-shadow">{value}</div>
      </div>
    </div>
  )
}
